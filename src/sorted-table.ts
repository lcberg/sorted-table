export class SortedTable<T extends { sortOrder: number }> {
    constructor(
        public items: T[],
        public columnCount: number,
    ) {}

    /**
     * Add a row starting at the provided index
     * @param itemsToAdd the cells of the row to add
     * @param addAtIndex the index in the array at which the first cell is to be added
     * @returns self
     */
    addRow(itemsToAdd: T[], addAtIndex: number) {
        if (itemsToAdd.length === 0) return this
        if (itemsToAdd.length != this.columnCount)
            throw new Error('Invalid column length')
        if (addAtIndex > 0 && addAtIndex % this.columnCount != 0)
            throw new Error('Invalid index')

        // overwrite sorting order
        let counter = addAtIndex
        for (let i = 0; i < itemsToAdd.length; i++) {
            itemsToAdd[i].sortOrder = counter++
        }

        this.items.splice(addAtIndex, 0, ...itemsToAdd)

        // offset rows
        // will not run if at end of array
        for (let j = addAtIndex + itemsToAdd.length; j < this.items.length; j++) {
            this.items[j].sortOrder += this.columnCount
        }
        if (!this.isSortedAndValid()) throw new Error('Invalid sort order')
        return this
    }

    /**
     * Add row at the provided row index. The following rows will get pushed "down"
     */
    addRowAtIndex(itemsToAdd: T[], rowIndex: number) {
        if (itemsToAdd.length === 0) return this
        if (rowIndex < 0) throw new Error(`Invalid index (${rowIndex})`)
        if (itemsToAdd.length != this.columnCount)
            throw new Error('Invalid column length')
        if (rowIndex * this.columnCount > this.items.length)
            throw new Error(
                `Row index ${rowIndex} out of bounds. (items: ${this.items.length}, columns: ${this.columnCount})`,
            )

        let counter = rowIndex * this.columnCount
        for (let i = 0; i < itemsToAdd.length; i++) {
            itemsToAdd[i].sortOrder = counter++
        }

        const insertIndex = rowIndex * this.columnCount
        this.items.splice(insertIndex, 0, ...itemsToAdd)

        // offset rows after added row
        for (let j = (rowIndex + 1) * this.columnCount; j < this.items.length; j++) {
            this.items[j].sortOrder += this.columnCount // offset each item one whole row
        }
        if (!this.isSortedAndValid()) throw new Error('Invalid sort order')
        return this
    }

    deleteRow(rowIndex: number) {
        if (rowIndex * this.columnCount >= this.items.length)
            throw new Error('Index out of bounds')
        if (rowIndex < 0) throw new Error('Index out of bounds')

        const deleteItems = this.items.splice(
            rowIndex * this.columnCount,
            this.columnCount,
        )

        // move back items behind the removed spot
        for (let i = rowIndex * this.columnCount; i < this.items.length; i++) {
            this.items[i].sortOrder -= this.columnCount
        }
        if (!this.isSortedAndValid()) throw new Error('Invalid sort order')

        return deleteItems
    }

    moveRow(moveIndexRow: number, targetIndexRow: number): T[] {
        if (moveIndexRow < 0 || targetIndexRow < 0) throw new Error('Index out of bounds')
        if (moveIndexRow == targetIndexRow) return []
        const rowCount = this.items.length / this.columnCount
        // can append to very end
        if (moveIndexRow > rowCount || targetIndexRow > rowCount)
            throw new Error(
                `Index (moveIndex: ${moveIndexRow}, targetIndex: targetIndexRow: ${targetIndexRow}) out of bounds`,
            )

        // careful when removing a row, the rows after this "come one row earlier"
        const itemsToMove = this.deleteRow(moveIndexRow)

        // if moving row down => reduce target index by 1
        if (moveIndexRow < targetIndexRow) targetIndexRow--
        this.addRowAtIndex(itemsToMove, targetIndexRow) // calls is sorted and valid anyways

        // every item between the two moving indexes is affected
        let moveCellIndex = moveIndexRow * this.columnCount
        let targetCellIndex = targetIndexRow * this.columnCount
        if (moveIndexRow < targetIndexRow) {
            targetCellIndex += this.columnCount // we reduced this earlier, need to increment this again
            return this.items.slice(moveCellIndex, targetCellIndex)
        } else {
            moveCellIndex += this.columnCount // move this back to include end of array
            return this.items.slice(targetCellIndex, moveCellIndex)
        }
    }

    deleteColumn(columnIndex: number) {
        if (columnIndex >= this.columnCount) throw new Error('Index out of bounds')
        if (columnIndex < 0) throw new Error('Index out of bounds')
        const itemsToDelete: T[] = []
        for (
            let i = this.items.length - this.columnCount + columnIndex;
            i >= 0;
            i -= this.columnCount
        ) {
            itemsToDelete.push(...this.items.splice(i, 1))
            for (let j = i; j < this.items.length; j++) {
                this.items[j].sortOrder -= 1
            }
        }
        this.columnCount--
        if (!this.isSortedAndValid()) throw new Error('Invalid sort order')
        return itemsToDelete
    }

    addInitialItem(item: T) {
        if (this.items.length > 0)
            throw new Error('There is already an item present in the table')
        item.sortOrder = 0
        this.items.push(item)
        return this
    }

    addColumn(items: T[], columnIndex: number) {
        if (items.length === 0) return this
        if (items.length != this.items.length / this.columnCount)
            throw new Error(
                `[SortedTable] Need to supply ${this.items.length / this.columnCount} items, tried to supply ${items.length}.`,
            )

        let extractIndex = 0
        for (let i = 0; i < this.items.length; i++) {
            if (i >= columnIndex && (i - columnIndex) % (this.columnCount + 1) == 0) {
                const itemToInsert = items[extractIndex++]
                itemToInsert.sortOrder = i
                this.items.splice(i, 0, itemToInsert)

                // offset remaining items
                for (let j = i + 1; j < this.items.length; j++) {
                    this.items[j].sortOrder += 1
                }
            }
        }
        if (columnIndex >= this.columnCount) {
            this.items.push(items[items.length - 1])
            this.items[this.items.length - 1].sortOrder = this.items.length - 1
        }
        this.columnCount++
        if (!this.isSortedAndValid()) throw new Error('Invalid sort order')
        return this
    }

    sort() {
        this.items.sort((a, b) => a.sortOrder - b.sortOrder)
        return this
    }

    isSortOrderValid() {
        this.sort()
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].sortOrder != i) return false
        }
        return true
    }

    isSortedAndValid() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].sortOrder != i) return false
        }
        return true
    }

    get2D() {
        const result: T[][] = []
        for (let i = 0; i < this.items.length; i += this.columnCount) {
            result.push(this.items.slice(i, i + this.columnCount))
        }
        return result
    }
}

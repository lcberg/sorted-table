import { SortedTable } from './sorted-table'

describe('sortedTable', () => {
    describe('deleteRow', () => {
        it('should delete row at index in middle', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                    { sortOrder: 9, name: 'j' },
                    { sortOrder: 10, name: 'k' },
                    { sortOrder: 11, name: 'l' },
                ],
                3,
            )

            table.deleteRow(2)
            const expectedResult = ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'k', 'l']
            expect(table.items.length).toBe(9)
            expectedResult.forEach((name, index) =>
                expect(table.items[index].name).toBe(name),
            )
        })

        it('should delete row at index start', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                    { sortOrder: 9, name: 'j' },
                    { sortOrder: 10, name: 'k' },
                    { sortOrder: 11, name: 'l' },
                ],
                3,
            )

            table.deleteRow(0)
            const expectedResult = ['d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
            expect(table.items.length).toBe(9)
            expectedResult.forEach((name, index) =>
                expect(table.items[index].name).toBe(name),
            )
        })

        it('should delete row at index end', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                    { sortOrder: 9, name: 'j' },
                    { sortOrder: 10, name: 'k' },
                    { sortOrder: 11, name: 'l' },
                ],
                3,
            )

            table.deleteRow(3)
            const expectedResult = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
            expect(table.items.length).toBe(9)
            expectedResult.forEach((name, index) =>
                expect(table.items[index].name).toBe(name),
            )
        })

        it('should throw when index out of bounds', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                    { sortOrder: 9, name: 'j' },
                    { sortOrder: 10, name: 'k' },
                    { sortOrder: 11, name: 'l' },
                ],
                3,
            )
            expect(() => table.deleteRow(4)).toThrow()
            expect(() => table.deleteRow(-1)).toThrow()
        })
    })

    describe('deleteColumn', () => {
        it('should delete column at index in middle', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                    { sortOrder: 9, name: 'j' },
                    { sortOrder: 10, name: 'k' },
                    { sortOrder: 11, name: 'l' },
                ],
                3,
            )
            table.deleteColumn(1)

            const expectedResult = ['a', 'c', 'd', 'f', 'g', 'i', 'j', 'l']
            expect(table.columnCount).toBe(2)
            expectedResult.forEach((name, index) =>
                expect(table.items[index].name).toBe(name),
            )
            expect(table.items.length).toBe(8)
            expect(table.isSortedAndValid()).toBe(true)
        })

        it('should delete column at index start', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                    { sortOrder: 9, name: 'j' },
                    { sortOrder: 10, name: 'k' },
                    { sortOrder: 11, name: 'l' },
                ],
                3,
            )
            table.deleteColumn(0)

            const expectedResult = ['b', 'c', 'e', 'f', 'h', 'i', 'k', 'l']
            expect(table.columnCount).toBe(2)
            expectedResult.forEach((name, index) =>
                expect(table.items[index].name).toBe(name),
            )
            expect(table.items.length).toBe(8)
            expect(table.isSortedAndValid()).toBe(true)
        })

        it('should delete column at index end', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                    { sortOrder: 9, name: 'j' },
                    { sortOrder: 10, name: 'k' },
                    { sortOrder: 11, name: 'l' },
                ],
                3,
            )
            table.deleteColumn(2)

            const expectedResult = ['a', 'b', 'd', 'e', 'g', 'h', 'j', 'k']
            expect(table.columnCount).toBe(2)
            expectedResult.forEach((name, index) =>
                expect(table.items[index].name).toBe(name),
            )
            expect(table.items.length).toBe(8)
            expect(table.isSortedAndValid()).toBe(true)
        })

        it('should throw when index out of bounds', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                    { sortOrder: 9, name: 'j' },
                    { sortOrder: 10, name: 'k' },
                    { sortOrder: 11, name: 'l' },
                ],
                3,
            )
            expect(() => table.deleteColumn(3)).toThrow()
            expect(() => table.deleteColumn(-1)).toThrow()
        })
    })

    describe('general', () => {
        it('should produce propper 2d array', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                ],
                3,
            )

            const result = table.get2D()
            expect(result.length).toBe(2)
            result.forEach((row) => expect(row.length).toBe(3))
        })
    })

    describe('addColumn', () => {
        it('should correctly add to end', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                ],
                3,
            )
            table.addColumn(
                [
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                ],
                3,
            )
            expect(table.items.length).toBe(8)
            expect(table.isSortedAndValid()).toBe(true)
            const expectedResult = ['a', 'b', 'c', 'g', 'd', 'e', 'f', 'h']
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })

        it('should correctly add to start', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                ],
                3,
            )
            table.addColumn(
                [
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                ],
                0,
            )
            expect(table.items.length).toBe(8)
            expect(table.isSortedAndValid()).toBe(true)
            const expectedResult = ['g', 'a', 'b', 'c', 'h', 'd', 'e', 'f']
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })

        it('should correctly add to middle', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                    { sortOrder: 9, name: 'j' },
                    { sortOrder: 10, name: 'k' },
                    { sortOrder: 11, name: 'l' },
                ],
                4,
            )
            table.addColumn(
                [
                    { sortOrder: 6, name: 'm' },
                    { sortOrder: 7, name: 'n' },
                    { sortOrder: 8, name: 'o' },
                ],
                2,
            )
            expect(table.items.length).toBe(15)
            expect(table.isSortedAndValid()).toBe(true)
            const expectedResult = [
                'a',
                'b',
                'm',
                'c',
                'd',
                'e',
                'f',
                'n',
                'g',
                'h',
                'i',
                'j',
                'o',
                'k',
                'l',
            ]
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })
    })

    describe('addRow', () => {
        it('should correctly append to end', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                ],
                3,
            )

            table.addRow(
                [
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                ],
                6,
            )

            expect(table.items.length).toBe(9)
            expect(table.isSortedAndValid()).toBe(true)
            const expectedResult = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })

        it('should correctly append to start', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                ],
                3,
            )

            table.addRow(
                [
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                ],
                0,
            )

            expect(table.items.length).toBe(9)
            expect(table.isSortedAndValid()).toBe(true)
            const expectedResult = ['g', 'h', 'i', 'a', 'b', 'c', 'd', 'e', 'f']
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })

        it('should correctly append to middle', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                ],
                3,
            )

            table.addRow(
                [
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                ],
                3,
            )

            expect(table.items.length).toBe(9)
            expect(table.isSortedAndValid()).toBe(true)
            const expectedResult = ['a', 'b', 'c', 'g', 'h', 'i', 'd', 'e', 'f']
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })

        it('should throw when not passing enough items to add', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                ],
                3,
            )
            expect(() =>
                table.addRow(
                    [
                        { sortOrder: 6, name: 'g' },
                        { sortOrder: 7, name: 'h' },
                    ],
                    3,
                ),
            ).toThrow()
        })
    })

    describe('addRowAtRowIndex', () => {
        it('should correctly add to the end', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                ],
                3,
            )
            table.addRowAtIndex(
                [
                    { sortOrder: 999, name: 'g' },
                    { sortOrder: 999, name: 'h' },
                    { sortOrder: 999, name: 'i' },
                ],
                2,
            )
            expect(table.items.length).toBe(9)
            expect(table.isSortedAndValid()).toBe(true)
            const expectedResult = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })

        it('it should correctly add to the middle', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                ],
                3,
            )
            table.addRowAtIndex(
                [
                    { sortOrder: 999, name: 'g' },
                    { sortOrder: 999, name: 'h' },
                    { sortOrder: 999, name: 'i' },
                ],
                1,
            )
            expect(table.items.length).toBe(9)
            expect(table.isSortedAndValid()).toBe(true)
            const expectedResult = ['a', 'b', 'c', 'g', 'h', 'i', 'd', 'e', 'f']
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })

        it('it should correctly prepend to the start', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                ],
                3,
            )
            table.addRowAtIndex(
                [
                    { sortOrder: 999, name: 'g' },
                    { sortOrder: 999, name: 'h' },
                    { sortOrder: 999, name: 'i' },
                ],
                0,
            )
            expect(table.items.length).toBe(9)
            expect(table.isSortedAndValid()).toBe(true)
            const expectedResult = ['g', 'h', 'i', 'a', 'b', 'c', 'd', 'e', 'f']
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })

        it('should throw when adding out of bounds', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                ],
                3,
            )
            expect(() => {
                table.addRowAtIndex(
                    [
                        { sortOrder: 999, name: 'g' },
                        { sortOrder: 999, name: 'h' },
                        { sortOrder: 999, name: 'i' },
                    ],
                    3,
                )
            }).toThrow()
            expect(() => {
                table.addRowAtIndex(
                    [
                        { sortOrder: 999, name: 'g' },
                        { sortOrder: 999, name: 'h' },
                        { sortOrder: 999, name: 'i' },
                    ],
                    -1,
                )
            }).toThrowError('Invalid index (-1)')
        })
    })

    describe('moveRow', () => {
        it('should throw for invalid indeces', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                ],
                3,
            )

            expect(() => {
                table.moveRow(-1, 0)
            }).toThrow()
            expect(() => {
                table.moveRow(0, -1)
            }).toThrow()
            expect(() => {
                table.moveRow(4, 3)
            }).toThrow()
            expect(() => {
                table.moveRow(1, 3)
            }).not.toThrow()
        })

        it('should correctly move start row to the end', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                ],
                3,
            )
            table.moveRow(0, 3)
            expect(table.items.length).toBe(9)
            const expectedResult = ['d', 'e', 'f', 'g', 'h', 'i', 'a', 'b', 'c']
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })

        it('should correctly move middle row to the end', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                ],
                3,
            )
            table.moveRow(1, 3)
            expect(table.items.length).toBe(9)
            const expectedResult = ['a', 'b', 'c', 'g', 'h', 'i', 'd', 'e', 'f']
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })

        it('should do no work when moving same index', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                ],
                3,
            )
            table.moveRow(3, 3)
            expect(table.items.length).toBe(9)
            const expectedResult = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })

        it('should return the correct items when not moving', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                ],
                3,
            )
            const result = table.moveRow(3, 3)
            expect(result.length).toBe(0)
            expect(table.items.length).toBe(9)
            const expectedResult = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })

        it('should return the correct items when moving back', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                ],
                3,
            )
            const result = table.moveRow(1, 3)
            expect(result.length).toBe(6)
            const expectedAffected = ['g', 'h', 'i', 'd', 'e', 'f']
            result.forEach((item, index) =>
                expect(item.name).toBe(expectedAffected[index]),
            )
            expect(table.items.length).toBe(9)
            const expectedResult = ['a', 'b', 'c', 'g', 'h', 'i', 'd', 'e', 'f']
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })

        it('should return the correct items when moving back', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                ],
                3,
            )
            const result = table.moveRow(0, 3)
            expect(result.length).toBe(9)
            const expectedResult = ['d', 'e', 'f', 'g', 'h', 'i', 'a', 'b', 'c']
            result.forEach((item, index) => expect(item.name).toBe(expectedResult[index]))
            expect(table.items.length).toBe(9)
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })

        it('should return the correct items when moving back, but not all the ways', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                    { sortOrder: 9, name: 'j' },
                    { sortOrder: 10, name: 'k' },
                    { sortOrder: 11, name: 'l' },
                ],
                3,
            )
            const result = table.moveRow(1, 3)
            expect(result.length).toBe(6)
            const expectedAffectedItems = ['g', 'h', 'i', 'd', 'e', 'f']
            result.forEach((item, index) =>
                expect(item.name).toBe(expectedAffectedItems[index]),
            )
            expect(table.items.length).toBe(12)
            const expectedResult = [
                'a',
                'b',
                'c',
                'g',
                'h',
                'i',
                'd',
                'e',
                'f',
                'j',
                'k',
                'l',
            ]
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })

        it('should return the correct items when moving front', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                    { sortOrder: 9, name: 'j' },
                    { sortOrder: 10, name: 'k' },
                    { sortOrder: 11, name: 'l' },
                ],
                3,
            )
            const result = table.moveRow(3, 0)
            expect(result.length).toBe(12)
            const expectedAffectedItems = [
                'j',
                'k',
                'l',
                'a',
                'b',
                'c',
                'd',
                'e',
                'f',
                'g',
                'h',
                'i',
            ]
            result.forEach((item, index) =>
                expect(item.name).toBe(expectedAffectedItems[index]),
            )
            expect(table.items.length).toBe(12)
            const expectedResult = [
                'j',
                'k',
                'l',
                'a',
                'b',
                'c',
                'd',
                'e',
                'f',
                'g',
                'h',
                'i',
            ]
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })

        it('should return the correct items when moving not all the way to the front', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                    { sortOrder: 6, name: 'g' },
                    { sortOrder: 7, name: 'h' },
                    { sortOrder: 8, name: 'i' },
                    { sortOrder: 9, name: 'j' },
                    { sortOrder: 10, name: 'k' },
                    { sortOrder: 11, name: 'l' },
                ],
                3,
            )
            const result = table.moveRow(3, 1)
            expect(result.length).toBe(9)
            const expectedAffectedItems = ['j', 'k', 'l', 'd', 'e', 'f', 'g', 'h', 'i']
            result.forEach((item, index) =>
                expect(item.name).toBe(expectedAffectedItems[index]),
            )
            expect(table.items.length).toBe(12)
            const expectedResult = [
                'a',
                'b',
                'c',
                'j',
                'k',
                'l',
                'd',
                'e',
                'f',
                'g',
                'h',
                'i',
            ]
            table.items.forEach((item, index) =>
                expect(item.name).toBe(expectedResult[index]),
            )
        })
    })

    describe('isSortedAndValid', () => {
        it('should return true if sort order is valid', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 5, name: 'f' },
                ],
                3,
            )

            expect(table.isSortedAndValid()).toBe(true)
        })

        it('should return false if sort order is invalid', () => {
            const table = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 5, name: 'e' },
                    { sortOrder: 4, name: 'f' },
                ],
                3,
            )
            expect(table.isSortedAndValid()).toBe(false)

            const table2 = new SortedTable(
                [
                    { sortOrder: 1, name: 'a' },
                    { sortOrder: 2, name: 'b' },
                    { sortOrder: 3, name: 'c' },
                    { sortOrder: 4, name: 'd' },
                    { sortOrder: 5, name: 'e' },
                    { sortOrder: 6, name: 'f' },
                ],
                3,
            )
            expect(table2.isSortedAndValid()).toBe(false)

            const table3 = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 1, name: 'b' },
                    { sortOrder: 2, name: 'c' },
                    { sortOrder: 3, name: 'd' },
                    { sortOrder: 4, name: 'e' },
                    { sortOrder: 6, name: 'f' },
                ],
                3,
            )
            expect(table3.isSortedAndValid()).toBe(false)

            const table4 = new SortedTable(
                [
                    { sortOrder: 0, name: 'a' },
                    { sortOrder: 0, name: 'b' },
                    { sortOrder: 1, name: 'c' },
                    { sortOrder: 2, name: 'd' },
                    { sortOrder: 3, name: 'e' },
                    { sortOrder: 4, name: 'f' },
                ],
                3,
            )
            expect(table4.isSortedAndValid()).toBe(false)
        })
    })
})

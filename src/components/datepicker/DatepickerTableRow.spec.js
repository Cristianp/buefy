import { shallow } from '@vue/test-utils'
import BDatepickerTableRow from '@components/datepicker/DatepickerTableRow'

const propsData = {
    week: [
        new Date('Sun Dec 31 2017 00:00:00 GMT-0200 (-02)'),
        new Date('Mon Jan 01 2018 00:00:00 GMT-0200 (-02)'),
        new Date('Tue Jan 02 2018 00:00:00 GMT-0200 (-02)'),
        new Date('Wed Jan 03 2018 00:00:00 GMT-0200 (-02)'),
        new Date('Thu Jan 04 2018 00:00:00 GMT-0200 (-02)'),
        new Date('Fri Jan 05 2018 00:00:00 GMT-0200 (-02)'),
        new Date('Sat Jan 06 2018 00:00:00 GMT-0200 (-02)')
    ],
    month: 12
}

describe('BDatepickerTableRow', () => {
    it('is called', () => {
        const wrapper = shallow(BDatepickerTableRow, { propsData })
        expect(wrapper.name()).toBe('BDatepickerTableRow')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    describe('classObject', function() {
        it('will has is-selected class for all range of dates selected', function() {
            const wrapper = shallow(BDatepickerTableRow, {
                propsData: {
                    ...propsData,
                    selectedDate: [propsData.week[1], propsData.week[5]]
                }
            })
            expect(wrapper.findAll('.is-selected').length).toBe(5)
        })

        it('will have is-first class for the first date selected within the range', function() {
            const wrapper = shallow(BDatepickerTableRow, {
                propsData: {
                    ...propsData,
                    selectedDate: [propsData.week[1], propsData.week[5]]
                }
            })
            const {wrappers: [firstSelectedCell]} = wrapper.findAll('.is-selected')
            expect(firstSelectedCell.classes()).toContain('is-first')
        })

        it('will have is-within class for the dates selected within the range', function() {
            const wrapper = shallow(BDatepickerTableRow, {
                propsData: {
                    ...propsData,
                    selectedDate: [propsData.week[1], propsData.week[5]]
                }
            })
            const withinSelectedRangeCells = wrapper.findAll('.is-selected.is-within')
            expect(withinSelectedRangeCells.length).toBe(3)
        })

        it('will have is-last class for the last date selected within the range', function() {
            const wrapper = shallow(BDatepickerTableRow, {
                propsData: {
                    ...propsData,
                    selectedDate: [propsData.week[1], propsData.week[5]]
                }
            })
            // wrappers should return 5 elements. Destructure to get the last one
            const {wrappers: [, , , ,lastSelectedCell]} = wrapper.findAll('.is-selected')
            expect(lastSelectedCell.classes()).toContain('is-last')
        })
    })
})

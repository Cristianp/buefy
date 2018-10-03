import { shallowMount } from '@vue/test-utils'
import BDatepicker from '@components/datepicker/Datepicker'

describe('BDatepicker', () => {
    it('is called', () => {
        const wrapper = shallowMount(BDatepicker)
        expect(wrapper.name()).toBe('BDatepicker')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    describe('default dateFormatter', function () {
        it('should format it in DD/MM/YYYY given a Date', function () {
            const wrapper = shallowMount(BDatepicker)
            const date = new Date()
            expect(wrapper.vm._props.dateFormatter(date)).toBe(date.toLocaleDateString())
        })

        it('should join two dates with a - given an array of two Dates', function () {
            const wrapper = shallowMount(BDatepicker)
            const date1 = new Date()
            const date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 2)
            expect(wrapper.vm._props.dateFormatter([date1, date2])).toBe(
                date1.toLocaleDateString() + ' - ' + date2.toLocaleDateString()
            )
        })
    })
})

import { shallowMount, createLocalVue } from '@vue/test-utils';
import HorseList from '@/components/HorseList.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('HorseList.vue', () => {
    let actions;
    let state;
    let store;

    beforeEach(() => {
        state = {
            horses: [
                { id: 1, name: 'Thunderbolt', condition: 'Excellent', color: '#FF5733' },
                { id: 2, name: 'Lightning', condition: 'Good', color: '#33FF57' },
                // Add more horse objects as needed for testing
            ],
        };

        store = new Vuex.Store({
            state,
        });
    });

    it('renders the correct number of horse cards', () => {
        const wrapper = shallowMount(HorseList, { store, localVue });
        const horseCards = wrapper.findAll('.horse-card');
        expect(horseCards.length).toBe(state.horses.length);
    });

    it('displays horse names correctly', () => {
        const wrapper = shallowMount(HorseList, { store, localVue });
        state.horses.forEach((horse, index) => {
            const horseName = wrapper.findAll('.horse-info h3').at(index).text();
            expect(horseName).toBe(horse.name);
        });
    });

    it('applies the correct horse colors', () => {
        const wrapper = shallowMount(HorseList, { store, localVue });
        state.horses.forEach((horse, index) => {
            const horseColor = wrapper.findAll('.horse-color').at(index);
            expect(horseColor.attributes('style')).toContain(`background-color: ${horse.color}`);
        });
    });
});

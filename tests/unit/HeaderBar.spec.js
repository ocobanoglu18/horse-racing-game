import { shallowMount, createLocalVue } from '@vue/test-utils';
import HeaderBar from '@/components/HeaderBar.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('HeaderBar.vue', () => {
    let actions;
    let state;
    let store;

    beforeEach(() => {
        state = {
            isRacing: false,
        };

        actions = {
            generateSchedule: jest.fn(),
            startRace: jest.fn(),
        };

        store = new Vuex.Store({
            state,
            actions,
        });
    });

    it('renders the correct title', () => {
        const wrapper = shallowMount(HeaderBar, { store, localVue });
        expect(wrapper.find('h1').text()).toBe('Horse Racing');
    });

    it('calls generateProgram when the button is clicked', () => {
        const wrapper = shallowMount(HeaderBar, { store, localVue });
        const button = wrapper.findAll('button').at(0);
        button.trigger('click');
        expect(actions.generateSchedule).toHaveBeenCalled();
    });

    it('toggles start/pause button text based on isRacing state', async () => {
        const wrapper = shallowMount(HeaderBar, { store, localVue });
        expect(wrapper.findAll('button').at(1).text()).toContain('Start');

        // Update the state to simulate racing
        store.state.isRacing = true;
        await wrapper.vm.$nextTick();

        expect(wrapper.findAll('button').at(1).text()).toContain('Pause');
    });
});

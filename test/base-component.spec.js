import { mount } from '@vue/test-utils';
import BaseComponent from '@/components/BaseComponent.vue';

describe('BaseComponent', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BaseComponent);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

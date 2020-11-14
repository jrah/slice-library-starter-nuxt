import {
  withKnobs,
  text,
  object
} from "@storybook/addon-knobs";
import Slice from './';
import model from './model';
import mocks from './mocks.json';
import SliceZone from 'vue-slicezone';
import cloneDeep from "lodash/cloneDeep";

export default {
  title: model.name,
  decorators: [withKnobs]
};
 
// TODO: Update to loop over mocks.json
export const _DefaultSlice = () => ({
  components: {
    Slice,
    SliceZone,
  },
  data() {
    return {
      // mock: mocks[0],
      resolver() {
        return Slice;
      }
    };
  },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mocks[0]);

        _mock.primary.title[0].text = text(
          "Title",
          _mock.primary.title[0].text
        );
        _mock.items = object(
          "Items (blocks)",
          _mock.items
        );
        return _mock;
      })()
    }
  },
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver" />',
  // template: "<slice :slice=\"mock\" />"
});

// DefaultSlice.storyName = mocks[0].name;
// _DefaultSlice.story = {
//   parameters: {
//     knobs: {
//       escapeHTML: false
//     }
//   }
// };
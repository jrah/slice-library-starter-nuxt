import {
  withKnobs,
  text,
} from "@storybook/addon-knobs";
import Slice from './';
import model from './model';
import mocks from './mocks.json';
import SliceZone from 'vue-slicezone';
import cloneDeep from "lodash/cloneDeep";

export default {
  title: model.name,
};

// TODO: Update to loop over mocks.json
export const DefaultSlice = () => ({
  components: {
    Slice,
    SliceZone,
  },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mocks[0]);

        _mock.primary.title[0].text = text(
          "Title",
          _mock.primary.title[0].text
        );
        _mock.primary.direction= text(
          "Direction",
          _mock.primary.direction
        );
        return _mock;
      })()
    }
  },
  data() {
    return {
      mock: mocks[0],
      resolver() {
        return Slice;
      }
    };
  },
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver" />',
});

DefaultSlice.storyName = mocks[0].name;

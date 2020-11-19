import {
  withKnobs,
  text,
  select,
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
export const DefaultSlice = () => ({
  components: {
    Slice,
    SliceZone,
  },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mocks[0]);
        _mock.primary.image.url = text(
          "Image url",
          _mock.primary.image.url
        );
        _mock.primary.content = object(
          "Content",
          _mock.primary.content
        );
        _mock.primary.direction = select(
          "Direction",
          {default: 'default', reverse: 'reverse'},
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

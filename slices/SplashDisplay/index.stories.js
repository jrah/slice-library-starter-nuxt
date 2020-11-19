import {
  withKnobs,
  text,
  select,
  object,
  color
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
        _mock.primary.fontcolor = select(
          "Font color",
          {Dark: 'dark', Light: 'light'},
          _mock.primary.fontcolor
        );
        _mock.primary.backgroundcolor = color(
          "Background color",
          _mock.primary.backgroundcolor
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

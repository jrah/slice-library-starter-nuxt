import {
  withKnobs,
  text,
  color,
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
        _mock.primary.subheading[0].text = text(
          "Subheading",
          _mock.primary.subheading[0].text
        );
        _mock.primary.fontcolor = select(
          "Font Color",
          {Dark: 'dark', Light: 'light'},
          _mock.primary.fontcolor
        );
        _mock.primary.backgroundcolor = color(
          "Background Color",
          _mock.primary.backgroundcolor
        );
        _mock.items = object(
          "Items array",
          _mock.items
        );
        return _mock;
      })()
    }
  },
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver" />',
});

_DefaultSlice.storyName = mocks[0].name;
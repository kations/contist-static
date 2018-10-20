import { transform as _transform } from "buble";

export const _poly = { assign: Object.assign };

const opts = {
  objectAssign: Object.assign,
  transforms: {
    dangerousForOf: true,
    dangerousTaggedTemplateString: true
  }
};

export default code => _transform(code, opts).code;

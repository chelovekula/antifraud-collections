var canvas = document.createElement('canvas');
gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

var ACTIVE_TEXTURE = gl.ACTIVE_TEXTURE;
var ALIASED_LINE_WIDTH_RANGE = gl.ALIASED_LINE_WIDTH_RANGE;
var ALIASED_POINT_SIZE_RANGE = gl.ALIASED_POINT_SIZE_RANGE;
var ALPHA_BITS = gl.ALPHA_BITS;
var ARRAY_BUFFER_BINDING = gl.ARRAY_BUFFER_BINDING;
var BLEND = gl.BLEND;
var BLEND_COLOR = gl.BLEND_COLOR;
var BLEND_DST_ALPHA = gl.BLEND_DST_ALPHA;
var BLEND_DST_RGB = gl.BLEND_DST_RGB;
var BLEND_EQUATION = gl.BLEND_EQUATION;
var BLEND_EQUATION_ALPHA = gl.BLEND_EQUATION_ALPHA;
var BLEND_EQUATION_RGB = gl.BLEND_EQUATION_RGB;
var BLEND_SRC_ALPHA = gl.BLEND_SRC_ALPHA;
var BLEND_SRC_RGB = gl.BLEND_SRC_RGB;
var BLUE_BITS = gl.BLUE_BITS;
var COLOR_CLEAR_VALUE = gl.COLOR_CLEAR_VALUE;
var COLOR_WRITEMASK = gl.COLOR_WRITEMASK;
var COMPRESSED_TEXTURE_FORMATS = gl.COMPRESSED_TEXTURE_FORMATS;
var CULL_FACE = gl.CULL_FACE;
var CULL_FACE_MODE = gl.CULL_FACE_MODE;
var CURRENT_PROGRAM = gl.CURRENT_PROGRAM;
var DEPTH_BITS = gl.DEPTH_BITS;
var DEPTH_CLEAR_VALUE = gl.DEPTH_CLEAR_VALUE;
var DEPTH_FUNC = gl.DEPTH_FUNC;
var DEPTH_RANGE = gl.DEPTH_RANGE;
var DEPTH_TEST = gl.DEPTH_TEST;
var DEPTH_WRITEMASK = gl.DEPTH_WRITEMASK;
var DITHER = gl.DITHER;
var ELEMENT_ARRAY_BUFFER_BINDING = gl.ELEMENT_ARRAY_BUFFER_BINDING;
var FRAMEBUFFER_BINDING = gl.FRAMEBUFFER_BINDING;
var FRONT_FACE = gl.FRONT_FACE;
var GENERATE_MIPMAP_HINT = gl.GENERATE_MIPMAP_HINT;
var GREEN_BITS = gl.GREEN_BITS;
var IMPLEMENTATION_COLOR_READ_FORMAT = gl.IMPLEMENTATION_COLOR_READ_FORMAT;
var IMPLEMENTATION_COLOR_READ_TYPE = gl.IMPLEMENTATION_COLOR_READ_TYPE;
var LINE_WIDTH = gl.LINE_WIDTH;
var MAX_COMBINED_TEXTURE_IMAGE_UNITS = gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS;
var MAX_CUBE_MAP_TEXTURE_SIZE = gl.MAX_CUBE_MAP_TEXTURE_SIZE;
var MAX_FRAGMENT_UNIFORM_VECTORS = gl.MAX_FRAGMENT_UNIFORM_VECTORS;
var MAX_RENDERBUFFER_SIZE = gl.MAX_RENDERBUFFER_SIZE;
var MAX_TEXTURE_IMAGE_UNITS = gl.MAX_TEXTURE_IMAGE_UNITS;
var MAX_TEXTURE_SIZE = gl.MAX_TEXTURE_SIZE;
var MAX_VARYING_VECTORS = gl.MAX_VARYING_VECTORS;
var MAX_VERTEX_ATTRIBS = gl.MAX_VERTEX_ATTRIBS;
var MAX_VERTEX_TEXTURE_IMAGE_UNITS = gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
var MAX_VERTEX_UNIFORM_VECTORS = gl.MAX_VERTEX_UNIFORM_VECTORS;
var MAX_VIEWPORT_DIMS = gl.MAX_VIEWPORT_DIMS;
var PACK_ALIGNMENT = gl.PACK_ALIGNMENT;
var POLYGON_OFFSET_FACTOR = gl.POLYGON_OFFSET_FACTOR;
var POLYGON_OFFSET_FILL = gl.POLYGON_OFFSET_FILL;
var POLYGON_OFFSET_UNITS = gl.POLYGON_OFFSET_UNITS;
var RED_BITS = gl.RED_BITS;
var RENDERBUFFER_BINDING = gl.RENDERBUFFER_BINDING;
var RENDERER = gl.RENDERER;
var SAMPLE_BUFFERS = gl.SAMPLE_BUFFERS;
var SAMPLE_COVERAGE_INVERT = gl.SAMPLE_COVERAGE_INVERT;
var SAMPLE_COVERAGE_VALUE = gl.SAMPLE_COVERAGE_VALUE;
var SAMPLES = gl.SAMPLES;
var SCISSOR_BOX = gl.SCISSOR_BOX;
var SCISSOR_TEST = gl.SCISSOR_TEST;
var SHADING_LANGUAGE_VERSION = gl.SHADING_LANGUAGE_VERSION;
var STENCIL_BACK_FAIL = gl.STENCIL_BACK_FAIL;
var STENCIL_BACK_FUNC = gl.STENCIL_BACK_FUNC;
var STENCIL_BACK_PASS_DEPTH_FAIL = gl.STENCIL_BACK_PASS_DEPTH_FAIL;
var STENCIL_BACK_PASS_DEPTH_PASS = gl.STENCIL_BACK_PASS_DEPTH_PASS;
var STENCIL_BACK_REF = gl.STENCIL_BACK_REF;
var STENCIL_BACK_VALUE_MASK = gl.STENCIL_BACK_VALUE_MASK;
var STENCIL_BACK_WRITEMASK = gl.STENCIL_BACK_WRITEMASK;
var STENCIL_BITS = gl.STENCIL_BITS;
var STENCIL_CLEAR_VALUE = gl.STENCIL_CLEAR_VALUE;
var STENCIL_FAIL = gl.STENCIL_FAIL;
var STENCIL_FUNC = gl.STENCIL_FUNC;
var STENCIL_PASS_DEPTH_FAIL = gl.STENCIL_PASS_DEPTH_FAIL;
var STENCIL_PASS_DEPTH_PASS = gl.STENCIL_PASS_DEPTH_PASS;
var STENCIL_REF = gl.STENCIL_REF;
var STENCIL_TEST = gl.STENCIL_TEST;
var STENCIL_VALUE_MASK = gl.STENCIL_VALUE_MASK;
var STENCIL_WRITEMASK = gl.STENCIL_WRITEMASK;
var SUBPIXEL_BITS = gl.SUBPIXEL_BITS;
var TEXTURE_BINDING_2D = gl.TEXTURE_BINDING_2D;
var TEXTURE_BINDING_CUBE_MAP = gl.TEXTURE_BINDING_CUBE_MAP;
var UNPACK_ALIGNMENT = gl.UNPACK_ALIGNMENT;
var UNPACK_COLORSPACE_CONVERSION_WEBGL = gl.UNPACK_COLORSPACE_CONVERSION_WEBGL;
var UNPACK_FLIP_Y_WEBGL = gl.UNPACK_FLIP_Y_WEBGL;
var UNPACK_PREMULTIPLY_ALPHA_WEBGL = gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL;
var VENDOR = gl.VENDOR;
var VERSION = gl.VERSION;
var VIEWPORT = gl.VIEWPORT;
var ext_UNMASKED_VENDOR_WEBGL = gl.getExtension('WEBGL_debug_renderer_info').UNMASKED_VENDOR_WEBGL;
var ext_UNMASKED_RENDERER_WEBGL = gl.getExtension('WEBGL_debug_renderer_info').UNMASKED_RENDERER_WEBGL;

var WebGlGetParametr = {};

WebGlGetParametr.ACTIVE_TEXTURE = {};
WebGlGetParametr.ACTIVE_TEXTURE.int = ACTIVE_TEXTURE;
WebGlGetParametr.ACTIVE_TEXTURE.data = gl.getParameter(ACTIVE_TEXTURE);
WebGlGetParametr.ACTIVE_TEXTURE.datatype = typeof gl.getParameter(ACTIVE_TEXTURE);

WebGlGetParametr.ALIASED_LINE_WIDTH_RANGE = {};
WebGlGetParametr.ALIASED_LINE_WIDTH_RANGE.int = ALIASED_LINE_WIDTH_RANGE;
WebGlGetParametr.ALIASED_LINE_WIDTH_RANGE.data = gl.getParameter(ALIASED_LINE_WIDTH_RANGE);
WebGlGetParametr.ALIASED_LINE_WIDTH_RANGE.datatype = typeof gl.getParameter(ALIASED_LINE_WIDTH_RANGE);

WebGlGetParametr.ALIASED_POINT_SIZE_RANGE = {};
WebGlGetParametr.ALIASED_POINT_SIZE_RANGE.int = ALIASED_POINT_SIZE_RANGE;
WebGlGetParametr.ALIASED_POINT_SIZE_RANGE.data = gl.getParameter(ALIASED_POINT_SIZE_RANGE);
WebGlGetParametr.ALIASED_POINT_SIZE_RANGE.datatype = typeof gl.getParameter(ALIASED_POINT_SIZE_RANGE);

WebGlGetParametr.ALPHA_BITS = {};
WebGlGetParametr.ALPHA_BITS.int = ALPHA_BITS;
WebGlGetParametr.ALPHA_BITS.data = gl.getParameter(ALPHA_BITS);
WebGlGetParametr.ALPHA_BITS.datatype = typeof gl.getParameter(ALPHA_BITS);

WebGlGetParametr.ARRAY_BUFFER_BINDING = {};
WebGlGetParametr.ARRAY_BUFFER_BINDING.int = ARRAY_BUFFER_BINDING;
WebGlGetParametr.ARRAY_BUFFER_BINDING.data = gl.getParameter(ARRAY_BUFFER_BINDING);
WebGlGetParametr.ARRAY_BUFFER_BINDING.datatype = typeof gl.getParameter(ARRAY_BUFFER_BINDING);

WebGlGetParametr.BLEND = {};
WebGlGetParametr.BLEND.int = BLEND;
WebGlGetParametr.BLEND.data = gl.getParameter(BLEND);
WebGlGetParametr.BLEND.datatype = typeof gl.getParameter(BLEND);

WebGlGetParametr.BLEND_COLOR = {};
WebGlGetParametr.BLEND_COLOR.int = BLEND_COLOR;
WebGlGetParametr.BLEND_COLOR.data = gl.getParameter(BLEND_COLOR);
WebGlGetParametr.BLEND_COLOR.datatype = typeof gl.getParameter(BLEND_COLOR);

WebGlGetParametr.BLEND_DST_ALPHA = {};
WebGlGetParametr.BLEND_DST_ALPHA.int = BLEND_DST_ALPHA;
WebGlGetParametr.BLEND_DST_ALPHA.data = gl.getParameter(BLEND_DST_ALPHA);
WebGlGetParametr.BLEND_DST_ALPHA.datatype = typeof gl.getParameter(BLEND_DST_ALPHA);

WebGlGetParametr.BLEND_DST_RGB = {};
WebGlGetParametr.BLEND_DST_RGB.int = BLEND_DST_RGB;
WebGlGetParametr.BLEND_DST_RGB.data = gl.getParameter(BLEND_DST_RGB);
WebGlGetParametr.BLEND_DST_RGB.datatype = typeof gl.getParameter(BLEND_DST_RGB);

WebGlGetParametr.BLEND_EQUATION = {};
WebGlGetParametr.BLEND_EQUATION.int = BLEND_EQUATION;
WebGlGetParametr.BLEND_EQUATION.data = gl.getParameter(BLEND_EQUATION);
WebGlGetParametr.BLEND_EQUATION.datatype = typeof gl.getParameter(BLEND_EQUATION);

WebGlGetParametr.BLEND_EQUATION_ALPHA = {};
WebGlGetParametr.BLEND_EQUATION_ALPHA.int = BLEND_EQUATION_ALPHA;
WebGlGetParametr.BLEND_EQUATION_ALPHA.data = gl.getParameter(BLEND_EQUATION_ALPHA);
WebGlGetParametr.BLEND_EQUATION_ALPHA.datatype = typeof gl.getParameter(BLEND_EQUATION_ALPHA);

WebGlGetParametr.BLEND_EQUATION_RGB = {};
WebGlGetParametr.BLEND_EQUATION_RGB.int = BLEND_EQUATION_RGB;
WebGlGetParametr.BLEND_EQUATION_RGB.data = gl.getParameter(BLEND_EQUATION_RGB);
WebGlGetParametr.BLEND_EQUATION_RGB.datatype = typeof gl.getParameter(BLEND_EQUATION_RGB);

WebGlGetParametr.BLEND_SRC_ALPHA = {};
WebGlGetParametr.BLEND_SRC_ALPHA.int = BLEND_SRC_ALPHA;
WebGlGetParametr.BLEND_SRC_ALPHA.data = gl.getParameter(BLEND_SRC_ALPHA);
WebGlGetParametr.BLEND_SRC_ALPHA.datatype = typeof gl.getParameter(BLEND_SRC_ALPHA);

WebGlGetParametr.BLEND_SRC_RGB = {};
WebGlGetParametr.BLEND_SRC_RGB.int = BLEND_SRC_RGB;
WebGlGetParametr.BLEND_SRC_RGB.data = gl.getParameter(BLEND_SRC_RGB);
WebGlGetParametr.BLEND_SRC_RGB.datatype = typeof gl.getParameter(BLEND_SRC_RGB);

WebGlGetParametr.BLUE_BITS = {};
WebGlGetParametr.BLUE_BITS.int = BLUE_BITS;
WebGlGetParametr.BLUE_BITS.data = gl.getParameter(BLUE_BITS);
WebGlGetParametr.BLUE_BITS.datatype = typeof gl.getParameter(BLUE_BITS);

WebGlGetParametr.COLOR_CLEAR_VALUE = {};
WebGlGetParametr.COLOR_CLEAR_VALUE.int = COLOR_CLEAR_VALUE;
WebGlGetParametr.COLOR_CLEAR_VALUE.data = gl.getParameter(COLOR_CLEAR_VALUE);
WebGlGetParametr.COLOR_CLEAR_VALUE.datatype = typeof gl.getParameter(COLOR_CLEAR_VALUE);

WebGlGetParametr.COLOR_WRITEMASK = {};
WebGlGetParametr.COLOR_WRITEMASK.int = COLOR_WRITEMASK;
WebGlGetParametr.COLOR_WRITEMASK.data = gl.getParameter(COLOR_WRITEMASK);
WebGlGetParametr.COLOR_WRITEMASK.datatype = typeof gl.getParameter(COLOR_WRITEMASK);

WebGlGetParametr.COMPRESSED_TEXTURE_FORMATS = {};
WebGlGetParametr.COMPRESSED_TEXTURE_FORMATS.int = COMPRESSED_TEXTURE_FORMATS;
WebGlGetParametr.COMPRESSED_TEXTURE_FORMATS.data = gl.getParameter(COMPRESSED_TEXTURE_FORMATS);
WebGlGetParametr.COMPRESSED_TEXTURE_FORMATS.datatype = typeof gl.getParameter(COMPRESSED_TEXTURE_FORMATS);

WebGlGetParametr.CULL_FACE = {};
WebGlGetParametr.CULL_FACE.int = CULL_FACE;
WebGlGetParametr.CULL_FACE.data = gl.getParameter(CULL_FACE);
WebGlGetParametr.CULL_FACE.datatype = typeof gl.getParameter(CULL_FACE);

WebGlGetParametr.CULL_FACE_MODE = {};
WebGlGetParametr.CULL_FACE_MODE.int = CULL_FACE_MODE;
WebGlGetParametr.CULL_FACE_MODE.data = gl.getParameter(CULL_FACE_MODE);
WebGlGetParametr.CULL_FACE_MODE.datatype = typeof gl.getParameter(CULL_FACE_MODE);

WebGlGetParametr.CURRENT_PROGRAM = {};
WebGlGetParametr.CURRENT_PROGRAM.int = CURRENT_PROGRAM;
WebGlGetParametr.CURRENT_PROGRAM.data = gl.getParameter(CURRENT_PROGRAM);
WebGlGetParametr.CURRENT_PROGRAM.datatype = typeof gl.getParameter(CURRENT_PROGRAM);

WebGlGetParametr.DEPTH_BITS = {};
WebGlGetParametr.DEPTH_BITS.int = DEPTH_BITS;
WebGlGetParametr.DEPTH_BITS.data = gl.getParameter(DEPTH_BITS);
WebGlGetParametr.DEPTH_BITS.datatype = typeof gl.getParameter(DEPTH_BITS);

WebGlGetParametr.DEPTH_CLEAR_VALUE = {};
WebGlGetParametr.DEPTH_CLEAR_VALUE.int = DEPTH_CLEAR_VALUE;
WebGlGetParametr.DEPTH_CLEAR_VALUE.data = gl.getParameter(DEPTH_CLEAR_VALUE);
WebGlGetParametr.DEPTH_CLEAR_VALUE.datatype = typeof gl.getParameter(DEPTH_CLEAR_VALUE);

WebGlGetParametr.DEPTH_FUNC = {};
WebGlGetParametr.DEPTH_FUNC.int = DEPTH_FUNC;
WebGlGetParametr.DEPTH_FUNC.data = gl.getParameter(DEPTH_FUNC);
WebGlGetParametr.DEPTH_FUNC.datatype = typeof gl.getParameter(DEPTH_FUNC);

WebGlGetParametr.DEPTH_RANGE = {};
WebGlGetParametr.DEPTH_RANGE.int = DEPTH_RANGE;
WebGlGetParametr.DEPTH_RANGE.data = gl.getParameter(DEPTH_RANGE);
WebGlGetParametr.DEPTH_RANGE.datatype = typeof gl.getParameter(DEPTH_RANGE);

WebGlGetParametr.DEPTH_TEST = {};
WebGlGetParametr.DEPTH_TEST.int = DEPTH_TEST;
WebGlGetParametr.DEPTH_TEST.data = gl.getParameter(DEPTH_TEST);
WebGlGetParametr.DEPTH_TEST.datatype = typeof gl.getParameter(DEPTH_TEST);

WebGlGetParametr.DEPTH_WRITEMASK = {};
WebGlGetParametr.DEPTH_WRITEMASK.int = DEPTH_WRITEMASK;
WebGlGetParametr.DEPTH_WRITEMASK.data = gl.getParameter(DEPTH_WRITEMASK);
WebGlGetParametr.DEPTH_WRITEMASK.datatype = typeof gl.getParameter(DEPTH_WRITEMASK);

WebGlGetParametr.DITHER = {};
WebGlGetParametr.DITHER.int = DITHER;
WebGlGetParametr.DITHER.data = gl.getParameter(DITHER);
WebGlGetParametr.DITHER.datatype = typeof gl.getParameter(DITHER);

WebGlGetParametr.ELEMENT_ARRAY_BUFFER_BINDING = {};
WebGlGetParametr.ELEMENT_ARRAY_BUFFER_BINDING.int = ELEMENT_ARRAY_BUFFER_BINDING;
WebGlGetParametr.ELEMENT_ARRAY_BUFFER_BINDING.data = gl.getParameter(ELEMENT_ARRAY_BUFFER_BINDING);
WebGlGetParametr.ELEMENT_ARRAY_BUFFER_BINDING.datatype = typeof gl.getParameter(ELEMENT_ARRAY_BUFFER_BINDING);

WebGlGetParametr.FRAMEBUFFER_BINDING = {};
WebGlGetParametr.FRAMEBUFFER_BINDING.int = FRAMEBUFFER_BINDING;
WebGlGetParametr.FRAMEBUFFER_BINDING.data = gl.getParameter(FRAMEBUFFER_BINDING);
WebGlGetParametr.FRAMEBUFFER_BINDING.datatype = typeof gl.getParameter(FRAMEBUFFER_BINDING);

WebGlGetParametr.FRONT_FACE = {};
WebGlGetParametr.FRONT_FACE.int = FRONT_FACE;
WebGlGetParametr.FRONT_FACE.data = gl.getParameter(FRONT_FACE);
WebGlGetParametr.FRONT_FACE.datatype = typeof gl.getParameter(FRONT_FACE);

WebGlGetParametr.GENERATE_MIPMAP_HINT = {};
WebGlGetParametr.GENERATE_MIPMAP_HINT.int = GENERATE_MIPMAP_HINT;
WebGlGetParametr.GENERATE_MIPMAP_HINT.data = gl.getParameter(GENERATE_MIPMAP_HINT);
WebGlGetParametr.GENERATE_MIPMAP_HINT.datatype = typeof gl.getParameter(GENERATE_MIPMAP_HINT);

WebGlGetParametr.GREEN_BITS = {};
WebGlGetParametr.GREEN_BITS.int = GREEN_BITS;
WebGlGetParametr.GREEN_BITS.data = gl.getParameter(GREEN_BITS);
WebGlGetParametr.GREEN_BITS.datatype = typeof gl.getParameter(GREEN_BITS);

WebGlGetParametr.IMPLEMENTATION_COLOR_READ_FORMAT = {};
WebGlGetParametr.IMPLEMENTATION_COLOR_READ_FORMAT.int = IMPLEMENTATION_COLOR_READ_FORMAT;
WebGlGetParametr.IMPLEMENTATION_COLOR_READ_FORMAT.data = gl.getParameter(IMPLEMENTATION_COLOR_READ_FORMAT);
WebGlGetParametr.IMPLEMENTATION_COLOR_READ_FORMAT.datatype = typeof gl.getParameter(IMPLEMENTATION_COLOR_READ_FORMAT);

WebGlGetParametr.IMPLEMENTATION_COLOR_READ_TYPE = {};
WebGlGetParametr.IMPLEMENTATION_COLOR_READ_TYPE.int = IMPLEMENTATION_COLOR_READ_TYPE;
WebGlGetParametr.IMPLEMENTATION_COLOR_READ_TYPE.data = gl.getParameter(IMPLEMENTATION_COLOR_READ_TYPE);
WebGlGetParametr.IMPLEMENTATION_COLOR_READ_TYPE.datatype = typeof gl.getParameter(IMPLEMENTATION_COLOR_READ_TYPE);

WebGlGetParametr.LINE_WIDTH = {};
WebGlGetParametr.LINE_WIDTH.int = LINE_WIDTH;
WebGlGetParametr.LINE_WIDTH.data = gl.getParameter(LINE_WIDTH);
WebGlGetParametr.LINE_WIDTH.datatype = typeof gl.getParameter(LINE_WIDTH);

WebGlGetParametr.MAX_COMBINED_TEXTURE_IMAGE_UNITS = {};
WebGlGetParametr.MAX_COMBINED_TEXTURE_IMAGE_UNITS.int = MAX_COMBINED_TEXTURE_IMAGE_UNITS;
WebGlGetParametr.MAX_COMBINED_TEXTURE_IMAGE_UNITS.data = gl.getParameter(MAX_COMBINED_TEXTURE_IMAGE_UNITS);
WebGlGetParametr.MAX_COMBINED_TEXTURE_IMAGE_UNITS.datatype = typeof gl.getParameter(MAX_COMBINED_TEXTURE_IMAGE_UNITS);

WebGlGetParametr.MAX_CUBE_MAP_TEXTURE_SIZE = {};
WebGlGetParametr.MAX_CUBE_MAP_TEXTURE_SIZE.int = MAX_CUBE_MAP_TEXTURE_SIZE;
WebGlGetParametr.MAX_CUBE_MAP_TEXTURE_SIZE.data = gl.getParameter(MAX_CUBE_MAP_TEXTURE_SIZE);
WebGlGetParametr.MAX_CUBE_MAP_TEXTURE_SIZE.datatype = typeof gl.getParameter(MAX_CUBE_MAP_TEXTURE_SIZE);

WebGlGetParametr.MAX_FRAGMENT_UNIFORM_VECTORS = {};
WebGlGetParametr.MAX_FRAGMENT_UNIFORM_VECTORS.int = MAX_FRAGMENT_UNIFORM_VECTORS;
WebGlGetParametr.MAX_FRAGMENT_UNIFORM_VECTORS.data = gl.getParameter(MAX_FRAGMENT_UNIFORM_VECTORS);
WebGlGetParametr.MAX_FRAGMENT_UNIFORM_VECTORS.datatype = typeof gl.getParameter(MAX_FRAGMENT_UNIFORM_VECTORS);

WebGlGetParametr.MAX_RENDERBUFFER_SIZE = {};
WebGlGetParametr.MAX_RENDERBUFFER_SIZE.int = MAX_RENDERBUFFER_SIZE;
WebGlGetParametr.MAX_RENDERBUFFER_SIZE.data = gl.getParameter(MAX_RENDERBUFFER_SIZE);
WebGlGetParametr.MAX_RENDERBUFFER_SIZE.datatype = typeof gl.getParameter(MAX_RENDERBUFFER_SIZE);

WebGlGetParametr.MAX_TEXTURE_IMAGE_UNITS = {};
WebGlGetParametr.MAX_TEXTURE_IMAGE_UNITS.int = MAX_TEXTURE_IMAGE_UNITS;
WebGlGetParametr.MAX_TEXTURE_IMAGE_UNITS.data = gl.getParameter(MAX_TEXTURE_IMAGE_UNITS);
WebGlGetParametr.MAX_TEXTURE_IMAGE_UNITS.datatype = typeof gl.getParameter(MAX_TEXTURE_IMAGE_UNITS);

WebGlGetParametr.MAX_TEXTURE_SIZE = {};
WebGlGetParametr.MAX_TEXTURE_SIZE.int = MAX_TEXTURE_SIZE;
WebGlGetParametr.MAX_TEXTURE_SIZE.data = gl.getParameter(MAX_TEXTURE_SIZE);
WebGlGetParametr.MAX_TEXTURE_SIZE.datatype = typeof gl.getParameter(MAX_TEXTURE_SIZE);

WebGlGetParametr.MAX_VARYING_VECTORS = {};
WebGlGetParametr.MAX_VARYING_VECTORS.int = MAX_VARYING_VECTORS;
WebGlGetParametr.MAX_VARYING_VECTORS.data = gl.getParameter(MAX_VARYING_VECTORS);
WebGlGetParametr.MAX_VARYING_VECTORS.datatype = typeof gl.getParameter(MAX_VARYING_VECTORS);

WebGlGetParametr.MAX_VERTEX_ATTRIBS = {};
WebGlGetParametr.MAX_VERTEX_ATTRIBS.int = MAX_VERTEX_ATTRIBS;
WebGlGetParametr.MAX_VERTEX_ATTRIBS.data = gl.getParameter(MAX_VERTEX_ATTRIBS);
WebGlGetParametr.MAX_VERTEX_ATTRIBS.datatype = typeof gl.getParameter(MAX_VERTEX_ATTRIBS);

WebGlGetParametr.MAX_VERTEX_TEXTURE_IMAGE_UNITS = {};
WebGlGetParametr.MAX_VERTEX_TEXTURE_IMAGE_UNITS.int = MAX_VERTEX_TEXTURE_IMAGE_UNITS;
WebGlGetParametr.MAX_VERTEX_TEXTURE_IMAGE_UNITS.data = gl.getParameter(MAX_VERTEX_TEXTURE_IMAGE_UNITS);
WebGlGetParametr.MAX_VERTEX_TEXTURE_IMAGE_UNITS.datatype = typeof gl.getParameter(MAX_VERTEX_TEXTURE_IMAGE_UNITS);

WebGlGetParametr.MAX_VERTEX_UNIFORM_VECTORS = {};
WebGlGetParametr.MAX_VERTEX_UNIFORM_VECTORS.int = MAX_VERTEX_UNIFORM_VECTORS;
WebGlGetParametr.MAX_VERTEX_UNIFORM_VECTORS.data = gl.getParameter(MAX_VERTEX_UNIFORM_VECTORS);
WebGlGetParametr.MAX_VERTEX_UNIFORM_VECTORS.datatype = typeof gl.getParameter(MAX_VERTEX_UNIFORM_VECTORS);

WebGlGetParametr.MAX_VIEWPORT_DIMS = {};
WebGlGetParametr.MAX_VIEWPORT_DIMS.int = MAX_VIEWPORT_DIMS;
WebGlGetParametr.MAX_VIEWPORT_DIMS.data = gl.getParameter(MAX_VIEWPORT_DIMS);
WebGlGetParametr.MAX_VIEWPORT_DIMS.datatype = typeof gl.getParameter(MAX_VIEWPORT_DIMS);

WebGlGetParametr.PACK_ALIGNMENT = {};
WebGlGetParametr.PACK_ALIGNMENT.int = PACK_ALIGNMENT;
WebGlGetParametr.PACK_ALIGNMENT.data = gl.getParameter(PACK_ALIGNMENT);
WebGlGetParametr.PACK_ALIGNMENT.datatype = typeof gl.getParameter(PACK_ALIGNMENT);

WebGlGetParametr.POLYGON_OFFSET_FACTOR = {};
WebGlGetParametr.POLYGON_OFFSET_FACTOR.int = POLYGON_OFFSET_FACTOR;
WebGlGetParametr.POLYGON_OFFSET_FACTOR.data = gl.getParameter(POLYGON_OFFSET_FACTOR);
WebGlGetParametr.POLYGON_OFFSET_FACTOR.datatype = typeof gl.getParameter(POLYGON_OFFSET_FACTOR);

WebGlGetParametr.POLYGON_OFFSET_FILL = {};
WebGlGetParametr.POLYGON_OFFSET_FILL.int = POLYGON_OFFSET_FILL;
WebGlGetParametr.POLYGON_OFFSET_FILL.data = gl.getParameter(POLYGON_OFFSET_FILL);
WebGlGetParametr.POLYGON_OFFSET_FILL.datatype = typeof gl.getParameter(POLYGON_OFFSET_FILL);

WebGlGetParametr.POLYGON_OFFSET_UNITS = {};
WebGlGetParametr.POLYGON_OFFSET_UNITS.int = POLYGON_OFFSET_UNITS;
WebGlGetParametr.POLYGON_OFFSET_UNITS.data = gl.getParameter(POLYGON_OFFSET_UNITS);
WebGlGetParametr.POLYGON_OFFSET_UNITS.datatype = typeof gl.getParameter(POLYGON_OFFSET_UNITS);

WebGlGetParametr.RED_BITS = {};
WebGlGetParametr.RED_BITS.int = RED_BITS;
WebGlGetParametr.RED_BITS.data = gl.getParameter(RED_BITS);
WebGlGetParametr.RED_BITS.datatype = typeof gl.getParameter(RED_BITS);

WebGlGetParametr.RENDERBUFFER_BINDING = {};
WebGlGetParametr.RENDERBUFFER_BINDING.int = RENDERBUFFER_BINDING;
WebGlGetParametr.RENDERBUFFER_BINDING.data = gl.getParameter(RENDERBUFFER_BINDING);
WebGlGetParametr.RENDERBUFFER_BINDING.datatype = typeof gl.getParameter(RENDERBUFFER_BINDING);

WebGlGetParametr.RENDERER = {};
WebGlGetParametr.RENDERER.int = RENDERER;
WebGlGetParametr.RENDERER.data = gl.getParameter(RENDERER);
WebGlGetParametr.RENDERER.datatype = typeof gl.getParameter(RENDERER);

WebGlGetParametr.SAMPLE_BUFFERS = {};
WebGlGetParametr.SAMPLE_BUFFERS.int = SAMPLE_BUFFERS;
WebGlGetParametr.SAMPLE_BUFFERS.data = gl.getParameter(SAMPLE_BUFFERS);
WebGlGetParametr.SAMPLE_BUFFERS.datatype = typeof gl.getParameter(SAMPLE_BUFFERS);

WebGlGetParametr.SAMPLE_COVERAGE_INVERT = {};
WebGlGetParametr.SAMPLE_COVERAGE_INVERT.int = SAMPLE_COVERAGE_INVERT;
WebGlGetParametr.SAMPLE_COVERAGE_INVERT.data = gl.getParameter(SAMPLE_COVERAGE_INVERT);
WebGlGetParametr.SAMPLE_COVERAGE_INVERT.datatype = typeof gl.getParameter(SAMPLE_COVERAGE_INVERT);

WebGlGetParametr.SAMPLE_COVERAGE_VALUE = {};
WebGlGetParametr.SAMPLE_COVERAGE_VALUE.int = SAMPLE_COVERAGE_VALUE;
WebGlGetParametr.SAMPLE_COVERAGE_VALUE.data = gl.getParameter(SAMPLE_COVERAGE_VALUE);
WebGlGetParametr.SAMPLE_COVERAGE_VALUE.datatype = typeof gl.getParameter(SAMPLE_COVERAGE_VALUE);

WebGlGetParametr.SAMPLES = {};
WebGlGetParametr.SAMPLES.int = SAMPLES;
WebGlGetParametr.SAMPLES.data = gl.getParameter(SAMPLES);
WebGlGetParametr.SAMPLES.datatype = typeof gl.getParameter(SAMPLES);

WebGlGetParametr.SCISSOR_BOX = {};
WebGlGetParametr.SCISSOR_BOX.int = SCISSOR_BOX;
WebGlGetParametr.SCISSOR_BOX.data = gl.getParameter(SCISSOR_BOX);
WebGlGetParametr.SCISSOR_BOX.datatype = typeof gl.getParameter(SCISSOR_BOX);

WebGlGetParametr.SCISSOR_TEST = {};
WebGlGetParametr.SCISSOR_TEST.int = SCISSOR_TEST;
WebGlGetParametr.SCISSOR_TEST.data = gl.getParameter(SCISSOR_TEST);
WebGlGetParametr.SCISSOR_TEST.datatype = typeof gl.getParameter(SCISSOR_TEST);

WebGlGetParametr.SHADING_LANGUAGE_VERSION = {};
WebGlGetParametr.SHADING_LANGUAGE_VERSION.int = SHADING_LANGUAGE_VERSION;
WebGlGetParametr.SHADING_LANGUAGE_VERSION.data = gl.getParameter(SHADING_LANGUAGE_VERSION);
WebGlGetParametr.SHADING_LANGUAGE_VERSION.datatype = typeof gl.getParameter(SHADING_LANGUAGE_VERSION);

WebGlGetParametr.STENCIL_BACK_FAIL = {};
WebGlGetParametr.STENCIL_BACK_FAIL.int = STENCIL_BACK_FAIL;
WebGlGetParametr.STENCIL_BACK_FAIL.data = gl.getParameter(STENCIL_BACK_FAIL);
WebGlGetParametr.STENCIL_BACK_FAIL.datatype = typeof gl.getParameter(STENCIL_BACK_FAIL);

WebGlGetParametr.STENCIL_BACK_FUNC = {};
WebGlGetParametr.STENCIL_BACK_FUNC.int = STENCIL_BACK_FUNC;
WebGlGetParametr.STENCIL_BACK_FUNC.data = gl.getParameter(STENCIL_BACK_FUNC);
WebGlGetParametr.STENCIL_BACK_FUNC.datatype = typeof gl.getParameter(STENCIL_BACK_FUNC);

WebGlGetParametr.STENCIL_BACK_PASS_DEPTH_FAIL = {};
WebGlGetParametr.STENCIL_BACK_PASS_DEPTH_FAIL.int = STENCIL_BACK_PASS_DEPTH_FAIL;
WebGlGetParametr.STENCIL_BACK_PASS_DEPTH_FAIL.data = gl.getParameter(STENCIL_BACK_PASS_DEPTH_FAIL);
WebGlGetParametr.STENCIL_BACK_PASS_DEPTH_FAIL.datatype = typeof gl.getParameter(STENCIL_BACK_PASS_DEPTH_FAIL);

WebGlGetParametr.STENCIL_BACK_PASS_DEPTH_PASS = {};
WebGlGetParametr.STENCIL_BACK_PASS_DEPTH_PASS.int = STENCIL_BACK_PASS_DEPTH_PASS;
WebGlGetParametr.STENCIL_BACK_PASS_DEPTH_PASS.data = gl.getParameter(STENCIL_BACK_PASS_DEPTH_PASS);
WebGlGetParametr.STENCIL_BACK_PASS_DEPTH_PASS.datatype = typeof gl.getParameter(STENCIL_BACK_PASS_DEPTH_PASS);

WebGlGetParametr.STENCIL_BACK_REF = {};
WebGlGetParametr.STENCIL_BACK_REF.int = STENCIL_BACK_REF;
WebGlGetParametr.STENCIL_BACK_REF.data = gl.getParameter(STENCIL_BACK_REF);
WebGlGetParametr.STENCIL_BACK_REF.datatype = typeof gl.getParameter(STENCIL_BACK_REF);

WebGlGetParametr.STENCIL_BACK_VALUE_MASK = {};
WebGlGetParametr.STENCIL_BACK_VALUE_MASK.int = STENCIL_BACK_VALUE_MASK;
WebGlGetParametr.STENCIL_BACK_VALUE_MASK.data = gl.getParameter(STENCIL_BACK_VALUE_MASK);
WebGlGetParametr.STENCIL_BACK_VALUE_MASK.datatype = typeof gl.getParameter(STENCIL_BACK_VALUE_MASK);

WebGlGetParametr.STENCIL_BACK_WRITEMASK = {};
WebGlGetParametr.STENCIL_BACK_WRITEMASK.int = STENCIL_BACK_WRITEMASK;
WebGlGetParametr.STENCIL_BACK_WRITEMASK.data = gl.getParameter(STENCIL_BACK_WRITEMASK);
WebGlGetParametr.STENCIL_BACK_WRITEMASK.datatype = typeof gl.getParameter(STENCIL_BACK_WRITEMASK);

WebGlGetParametr.STENCIL_BITS = {};
WebGlGetParametr.STENCIL_BITS.int = STENCIL_BITS;
WebGlGetParametr.STENCIL_BITS.data = gl.getParameter(STENCIL_BITS);
WebGlGetParametr.STENCIL_BITS.datatype = typeof gl.getParameter(STENCIL_BITS);

WebGlGetParametr.STENCIL_CLEAR_VALUE = {};
WebGlGetParametr.STENCIL_CLEAR_VALUE.int = STENCIL_CLEAR_VALUE;
WebGlGetParametr.STENCIL_CLEAR_VALUE.data = gl.getParameter(STENCIL_CLEAR_VALUE);
WebGlGetParametr.STENCIL_CLEAR_VALUE.datatype = typeof gl.getParameter(STENCIL_CLEAR_VALUE);

WebGlGetParametr.STENCIL_FAIL = {};
WebGlGetParametr.STENCIL_FAIL.int = STENCIL_FAIL;
WebGlGetParametr.STENCIL_FAIL.data = gl.getParameter(STENCIL_FAIL);
WebGlGetParametr.STENCIL_FAIL.datatype = typeof gl.getParameter(STENCIL_FAIL);

WebGlGetParametr.STENCIL_FUNC = {};
WebGlGetParametr.STENCIL_FUNC.int = STENCIL_FUNC;
WebGlGetParametr.STENCIL_FUNC.data = gl.getParameter(STENCIL_FUNC);
WebGlGetParametr.STENCIL_FUNC.datatype = typeof gl.getParameter(STENCIL_FUNC);

WebGlGetParametr.STENCIL_PASS_DEPTH_FAIL = {};
WebGlGetParametr.STENCIL_PASS_DEPTH_FAIL.int = STENCIL_PASS_DEPTH_FAIL;
WebGlGetParametr.STENCIL_PASS_DEPTH_FAIL.data = gl.getParameter(STENCIL_PASS_DEPTH_FAIL);
WebGlGetParametr.STENCIL_PASS_DEPTH_FAIL.datatype = typeof gl.getParameter(STENCIL_PASS_DEPTH_FAIL);

WebGlGetParametr.STENCIL_PASS_DEPTH_PASS = {};
WebGlGetParametr.STENCIL_PASS_DEPTH_PASS.int = STENCIL_PASS_DEPTH_PASS;
WebGlGetParametr.STENCIL_PASS_DEPTH_PASS.data = gl.getParameter(STENCIL_PASS_DEPTH_PASS);
WebGlGetParametr.STENCIL_PASS_DEPTH_PASS.datatype = typeof gl.getParameter(STENCIL_PASS_DEPTH_PASS);

WebGlGetParametr.STENCIL_REF = {};
WebGlGetParametr.STENCIL_REF.int = STENCIL_REF;
WebGlGetParametr.STENCIL_REF.data = gl.getParameter(STENCIL_REF);
WebGlGetParametr.STENCIL_REF.datatype = typeof gl.getParameter(STENCIL_REF);

WebGlGetParametr.STENCIL_TEST = {};
WebGlGetParametr.STENCIL_TEST.int = STENCIL_TEST;
WebGlGetParametr.STENCIL_TEST.data = gl.getParameter(STENCIL_TEST);
WebGlGetParametr.STENCIL_TEST.datatype = typeof gl.getParameter(STENCIL_TEST);

WebGlGetParametr.STENCIL_VALUE_MASK = {};
WebGlGetParametr.STENCIL_VALUE_MASK.int = STENCIL_VALUE_MASK;
WebGlGetParametr.STENCIL_VALUE_MASK.data = gl.getParameter(STENCIL_VALUE_MASK);
WebGlGetParametr.STENCIL_VALUE_MASK.datatype = typeof gl.getParameter(STENCIL_VALUE_MASK);

WebGlGetParametr.STENCIL_WRITEMASK = {};
WebGlGetParametr.STENCIL_WRITEMASK.int = STENCIL_WRITEMASK;
WebGlGetParametr.STENCIL_WRITEMASK.data = gl.getParameter(STENCIL_WRITEMASK);
WebGlGetParametr.STENCIL_WRITEMASK.datatype = typeof gl.getParameter(STENCIL_WRITEMASK);

WebGlGetParametr.SUBPIXEL_BITS = {};
WebGlGetParametr.SUBPIXEL_BITS.int = SUBPIXEL_BITS;
WebGlGetParametr.SUBPIXEL_BITS.data = gl.getParameter(SUBPIXEL_BITS);
WebGlGetParametr.SUBPIXEL_BITS.datatype = typeof gl.getParameter(SUBPIXEL_BITS);

WebGlGetParametr.TEXTURE_BINDING_2D = {};
WebGlGetParametr.TEXTURE_BINDING_2D.int = TEXTURE_BINDING_2D;
WebGlGetParametr.TEXTURE_BINDING_2D.data = gl.getParameter(TEXTURE_BINDING_2D);
WebGlGetParametr.TEXTURE_BINDING_2D.datatype = typeof gl.getParameter(TEXTURE_BINDING_2D);

WebGlGetParametr.TEXTURE_BINDING_CUBE_MAP = {};
WebGlGetParametr.TEXTURE_BINDING_CUBE_MAP.int = TEXTURE_BINDING_CUBE_MAP;
WebGlGetParametr.TEXTURE_BINDING_CUBE_MAP.data = gl.getParameter(TEXTURE_BINDING_CUBE_MAP);
WebGlGetParametr.TEXTURE_BINDING_CUBE_MAP.datatype = typeof gl.getParameter(TEXTURE_BINDING_CUBE_MAP);

WebGlGetParametr.UNPACK_ALIGNMENT = {};
WebGlGetParametr.UNPACK_ALIGNMENT.int = UNPACK_ALIGNMENT;
WebGlGetParametr.UNPACK_ALIGNMENT.data = gl.getParameter(UNPACK_ALIGNMENT);
WebGlGetParametr.UNPACK_ALIGNMENT.datatype = typeof gl.getParameter(UNPACK_ALIGNMENT);

WebGlGetParametr.UNPACK_COLORSPACE_CONVERSION_WEBGL = {};
WebGlGetParametr.UNPACK_COLORSPACE_CONVERSION_WEBGL.int = UNPACK_COLORSPACE_CONVERSION_WEBGL;
WebGlGetParametr.UNPACK_COLORSPACE_CONVERSION_WEBGL.data = gl.getParameter(UNPACK_COLORSPACE_CONVERSION_WEBGL);
WebGlGetParametr.UNPACK_COLORSPACE_CONVERSION_WEBGL.datatype = typeof gl.getParameter(UNPACK_COLORSPACE_CONVERSION_WEBGL);

WebGlGetParametr.UNPACK_FLIP_Y_WEBGL = {};
WebGlGetParametr.UNPACK_FLIP_Y_WEBGL.int = UNPACK_FLIP_Y_WEBGL;
WebGlGetParametr.UNPACK_FLIP_Y_WEBGL.data = gl.getParameter(UNPACK_FLIP_Y_WEBGL);
WebGlGetParametr.UNPACK_FLIP_Y_WEBGL.datatype = typeof gl.getParameter(UNPACK_FLIP_Y_WEBGL);

WebGlGetParametr.UNPACK_PREMULTIPLY_ALPHA_WEBGL = {};
WebGlGetParametr.UNPACK_PREMULTIPLY_ALPHA_WEBGL.int = UNPACK_PREMULTIPLY_ALPHA_WEBGL;
WebGlGetParametr.UNPACK_PREMULTIPLY_ALPHA_WEBGL.data = gl.getParameter(UNPACK_PREMULTIPLY_ALPHA_WEBGL);
WebGlGetParametr.UNPACK_PREMULTIPLY_ALPHA_WEBGL.datatype = typeof gl.getParameter(UNPACK_PREMULTIPLY_ALPHA_WEBGL);

WebGlGetParametr.VENDOR = {};
WebGlGetParametr.VENDOR.int = VENDOR;
WebGlGetParametr.VENDOR.data = gl.getParameter(VENDOR);
WebGlGetParametr.VENDOR.datatype = typeof gl.getParameter(VENDOR);

WebGlGetParametr.VERSION = {};
WebGlGetParametr.VERSION.int = VERSION;
WebGlGetParametr.VERSION.data = gl.getParameter(VERSION);
WebGlGetParametr.VERSION.datatype = typeof gl.getParameter(VERSION);

WebGlGetParametr.VIEWPORT = {};
WebGlGetParametr.VIEWPORT.int = VIEWPORT;
WebGlGetParametr.VIEWPORT.data = gl.getParameter(VIEWPORT);
WebGlGetParametr.VIEWPORT.datatype = typeof gl.getParameter(VIEWPORT);

WebGlGetParametr.ext_UNMASKED_VENDOR_WEBGL = {};
WebGlGetParametr.ext_UNMASKED_VENDOR_WEBGL.int = ext_UNMASKED_VENDOR_WEBGL;
WebGlGetParametr.ext_UNMASKED_VENDOR_WEBGL.data = gl.getParameter(ext_UNMASKED_VENDOR_WEBGL);
WebGlGetParametr.ext_UNMASKED_VENDOR_WEBGL.datatype = typeof gl.getParameter(ext_UNMASKED_VENDOR_WEBGL);

WebGlGetParametr.ext_UNMASKED_RENDERER_WEBGL = {};
WebGlGetParametr.ext_UNMASKED_RENDERER_WEBGL.int = ext_UNMASKED_RENDERER_WEBGL;
WebGlGetParametr.ext_UNMASKED_RENDERER_WEBGL.data = gl.getParameter(ext_UNMASKED_RENDERER_WEBGL);
WebGlGetParametr.ext_UNMASKED_RENDERER_WEBGL.datatype = typeof gl.getParameter(ext_UNMASKED_RENDERER_WEBGL);


console.log(WebGlGetParametr);
copy(WebGlGetParametr);

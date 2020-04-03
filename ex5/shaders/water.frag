#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D uSampler;

varying vec2 startingCoord;
varying float height;

void main() {
	vec4 color = texture2D(uSampler, startingCoord);

	color = vec4(color.rgb - (height / 5.0), 1.0);

	gl_FragColor = color;
}
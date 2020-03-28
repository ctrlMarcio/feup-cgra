#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D uSampler;
//uniform sampler2D uSampler2;
uniform sampler2D uSampler3;

varying vec2 vTextureCoord;
varying vec2 startingCoord;
varying float height;

void main() {
	vec4 color = texture2D(uSampler, startingCoord);
	
	vec4 filter = texture2D(uSampler3, startingCoord);

	color = vec4(color.rgb - (height / 5.0), 1.0);

	gl_FragColor = color;
}
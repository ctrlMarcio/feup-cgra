attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform sampler2D map;
uniform float timeFactor;

varying vec2 startingCoord;
varying float height;

void main() {
	vec3 offset = vec3(0.0, 0.0, 0.0);

	vec2 newCoords = aTextureCoord + vec2(timeFactor, timeFactor);	
	startingCoord = newCoords;

	if (newCoords.s > 1.0)
		newCoords.s -= 1.0;
	if (newCoords.t > 1.0)
		newCoords.t -= 1.0;

	height = texture2D(map, newCoords).b;
	offset.z = height / 26.0;

	vec4 pos = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);

	gl_Position = pos;
}
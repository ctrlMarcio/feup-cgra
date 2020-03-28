/*
TODO: NOT THE FINAL SOLUTION, looks bad, one can see the borders of the map texture
TODO: remove the setTextures of the scene's update(t) method and use usample2 on the .frag shader
*/
attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform sampler2D uSampler3;
uniform float timeFactor;

varying vec2 vTextureCoord;
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

	height = texture2D(uSampler3, newCoords).b;
	offset.z = height / 26.0;

	vec4 pos = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);

	vTextureCoord = newCoords;
	gl_Position = pos;
}
class Classroom extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        this.room = new Room(this.scene);
        this.initTables();
        this.initChairs();
        this.whiteBoard = new WhiteBoard(this.scene);
        this.initKeyboards();
        this.initComputerScreens();
    }

    display(partyMode) {
        this.displayWallsAndEnv();
        this.displayTables();
        this.displayChairs();
        this.displayWhiteBoard();
        this.displayKeyboards();
        this.displayComputerScreens(partyMode);
    }

    initTables() {
        // various tables to get random placement
        this.tables1 = new TableGroup(this.scene);
        this.tables2 = new TableGroup(this.scene);
        this.tables3 = new TableGroup(this.scene);
        this.tables4 = new TableGroup(this.scene);
    }

    initChairs() {
        var MAX_ANGLE = Math.PI / 8; // abs, i.e., angle in [-Math.PI / 8, Math.PI / 8]

        this.chair = new Chair(this.scene);

        this.chairAngles = new Array(16);
        for (var i = 0; i < this.chairAngles.length; i++)
            this.chairAngles[i] = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;
    }

    initKeyboards() {
        var MAX_ANGLE = Math.PI / 8
        var MAX_TRANSLATION = 0.5;

        this.keyboard = new Keyboard(this.scene);

        this.keyboardAngles = new Array(8);
        for (var i = 0; i < this.keyboardAngles.length; i++)
            this.keyboardAngles[i] = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;

        this.keyboardXTranslation = new Array(8);
        for (var i = 0; i < this.keyboardXTranslation.length; i++)
            this.keyboardXTranslation[i] = Math.random() * MAX_TRANSLATION - MAX_TRANSLATION / 2;

        this.keyboardZTranslation = new Array(8);
        for (var i = 0; i < this.keyboardZTranslation.length; i++)
            this.keyboardZTranslation[i] = Math.random() * MAX_TRANSLATION - MAX_TRANSLATION / 2;

        this.xPositions = [25, 15, -20, -10];
        this.zPositions = [-5, -15, 10, 20];
    }

    initComputerScreens() {
        this.computerScreen = new ComputerScreen(this.scene);
        this.screenRotations = [Math.PI/8, 7*Math.PI/8, -7*Math.PI/8, -Math.PI/8]; // the rotations a screen can take, starting from the 1st quadrant on xz and going anti-clockwise
    }

    displayWallsAndEnv() {
        this.scene.pushMatrix();
        this.room.display();
        this.scene.popMatrix();
    }

    displayTables() {
        this.scene.pushMatrix();
        this.scene.translate(20, 0, 15);
        this.tables1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(20, 0, -10);
        this.tables2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-15, 0, 15);
        this.tables3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-15, 0, -10);
        this.tables4.display();
        this.scene.popMatrix();
    }

    displayChairs() {
        this.scene.pushMatrix();
        this.scene.translate(14, 0, -20);
        this.scene.rotate(this.chairAngles[0], 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(25, 0, -17);
        this.scene.rotate(this.chairAngles[1], 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(15, 0, -1);
        this.scene.rotate(this.chairAngles[2], 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(25, 0, -2);
        this.scene.rotate(this.chairAngles[3], 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(26, 0, 5);
        this.scene.rotate(this.chairAngles[4], 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(14, 0, 8);
        this.scene.rotate(this.chairAngles[5], 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(14, 0, 25);
        this.scene.rotate(this.chairAngles[6], 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(25, 0, 22);
        this.scene.rotate(this.chairAngles[7], 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-21, 0, 5);
        this.scene.rotate(this.chairAngles[8], 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-8, 0, 8);
        this.scene.rotate(this.chairAngles[9], 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-9, 0, 25);
        this.scene.rotate(this.chairAngles[10], 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-20, 0, 22);
        this.scene.rotate(this.chairAngles[11], 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-9, 0, -20);
        this.scene.rotate(this.chairAngles[12], 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-20, 0, -17);
        this.scene.rotate(this.chairAngles[13], 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-10, 0, -1);
        this.scene.rotate(this.chairAngles[14], 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-19, 0, -2);
        this.scene.rotate(this.chairAngles[15], 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();
    }

    displayWhiteBoard() {
        this.scene.pushMatrix();
        this.scene.translate(this.whiteBoard.depth - this.room.width / 2, this.whiteBoard.height / 2 + 10, -10.3);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.whiteBoard.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.whiteBoard.depth - this.room.width / 2, this.whiteBoard.height / 2 + 10, 15);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.whiteBoard.display();
        this.scene.popMatrix();
    }

    displayKeyboards() {
        this.scene.pushMatrix();
        this.scene.translate(0, this.tables1.table.getBaseHeight() + this.keyboard.thickness + 0.1, 0); // 0.2 from the rotation

        this.scene.pushMatrix();
        this.scene.translate(this.xPositions[0] + this.keyboardXTranslation[0], 0, this.zPositions[0] + this.keyboardZTranslation[0]);
        this.scene.rotate(this.keyboardAngles[0], 0, 1, 0);
        this.keyboard.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.xPositions[1] + this.keyboardXTranslation[1], 0, this.zPositions[1] + this.keyboardZTranslation[1]);
        this.scene.rotate(Math.PI + this.keyboardAngles[1], 0, 1, 0);
        this.keyboard.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.xPositions[0] + this.keyboardXTranslation[2], 0, this.zPositions[2] + this.keyboardZTranslation[2]);
        this.scene.rotate(Math.PI + this.keyboardAngles[2], 0, 1, 0);
        this.keyboard.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.xPositions[1] + this.keyboardXTranslation[3], 0, this.zPositions[3] + this.keyboardZTranslation[3]);
        this.scene.rotate(this.keyboardAngles[3], 0, 1, 0);
        this.keyboard.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.xPositions[2] + this.keyboardXTranslation[4], 0, this.zPositions[0] + this.keyboardZTranslation[4]);
        this.scene.rotate(this.keyboardAngles[4], 0, 1, 0);
        this.keyboard.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.xPositions[3] + this.keyboardXTranslation[5], 0, this.zPositions[1] + this.keyboardZTranslation[5]);
        this.scene.rotate(Math.PI + this.keyboardAngles[5], 0, 1, 0);
        this.keyboard.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.xPositions[2] + this.keyboardXTranslation[6], 0, this.zPositions[2] + this.keyboardZTranslation[6]);
        this.scene.rotate(Math.PI + this.keyboardAngles[6], 0, 1, 0);
        this.keyboard.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.xPositions[3] + this.keyboardXTranslation[7], 0, this.zPositions[3] + this.keyboardZTranslation[7]);
        this.scene.rotate(this.keyboardAngles[7], 0, 1, 0);
        this.keyboard.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }

    displayComputerScreens(partyMode) {
        this.scene.pushMatrix();
        this.scene.translate(0, this.tables1.table.getBaseHeight(), 0); // puts in the height of the base of the tables

        this.scene.pushMatrix();
        this.scene.translate(29, 0, -8);
        this.scene.rotate(this.screenRotations[3], 0, 1, 0);
        this.computerScreen.display(partyMode);
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(11, 0, -12);
        this.scene.rotate(this.screenRotations[1], 0, 1, 0);
        this.computerScreen.display(partyMode);
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(22, 0, 13);
        this.scene.rotate(this.screenRotations[1], 0, 1, 0);
        this.computerScreen.display(partyMode);
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(18, 0, 17);
        this.scene.rotate(this.screenRotations[3], 0, 1, 0);
        this.computerScreen.display(partyMode);
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-17, 0, -8);
        this.scene.rotate(this.screenRotations[3], 0, 1, 0);
        this.computerScreen.display(partyMode);
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-13, 0, -12);
        this.scene.rotate(this.screenRotations[1], 0, 1, 0);
        this.computerScreen.display(partyMode);
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-22, 0, 13);
        this.scene.rotate(this.screenRotations[1], 0, 1, 0);
        this.computerScreen.display(partyMode);
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-7, 0, 17);
        this.scene.rotate(this.screenRotations[3], 0, 1, 0);
        this.computerScreen.display(partyMode);
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}
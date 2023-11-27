import java.util.Stack;

// CeilingFan class represents the device we want to control
class CeilingFan {
    private String location;
    private int speed;

    public CeilingFan(String location) {
        this.location = location;
        this.speed = 0;
    }

    public void high() {
        speed = 3;
        System.out.println(location + " ceiling fan is on high.");
    }

    public void medium() {
        speed = 2;
        System.out.println(location + " ceiling fan is on medium.");
    }

    public void low() {
        speed = 1;
        System.out.println(location + " ceiling fan is on low.");
    }

    public void off() {
        speed = 0;
        System.out.println(location + " ceiling fan is off.");
    }

    public int getSpeed() {
        return speed;
    }
}

// UndoableCommand interface for commands with undo functionality
interface UndoableCommand {
    void execute();
    void undo();
}

// Concrete Command for changing the fan speed to high
class CeilingFanHighCommand implements UndoableCommand {
    private CeilingFan fan;
    private int prevSpeed;

    public CeilingFanHighCommand(CeilingFan fan) {
        this.fan = fan;
    }

    @Override
    public void execute() {
        prevSpeed = fan.getSpeed();
        fan.high();
    }

    @Override
    public void undo() {
        if (prevSpeed == 3) {
            fan.high();
        } else if (prevSpeed == 2) {
            fan.medium();
        } else if (prevSpeed == 1) {
            fan.low();
        } else {
            fan.off();
        }
    }
}

// CeilingFanRemote to invoke commands
class CeilingFanRemote {
    private UndoableCommand command;

    public void setCommand(UndoableCommand command) {
        this.command = command;
    }

    public void buttonPressed() {
        command.execute();
    }

    public void undoButtonPressed() {
        command.undo();
    }
}

public class asign6 {
    public static void main(String[] args) {
        CeilingFan fan = new CeilingFan("Living Room");
        CeilingFanRemote remote = new CeilingFanRemote();

        // Turning the fan on high
        CeilingFanHighCommand highCommand = new CeilingFanHighCommand(fan);
        remote.setCommand(highCommand);

        remote.buttonPressed(); // Turns the fan on high

        // Undo the last command
        remote.undoButtonPressed(); // Should undo and set the fan to the previous speed
    }
}


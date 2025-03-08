class UserData {
    constructor(name, age, email, address, phoneNumber) { // Long Parameter List
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
}

class UnnecessaryHelper { // Lazy Class
    formatEmail(email) {
        return email.toLowerCase().trim();
    }
}

class UserManager {
    constructor() {
        this.tempData = null; // Temporary Field
    }

    createUser(name, age, email, address, phoneNumber) {
        return new UserData(name, age, email, address, phoneNumber);
    }

    sendEmail(user) {
        this.tempData = "Sending email..."; // Temporary Field
        console.log(`Sending email to ${user.email}`);
    }
}

function validateUserInput(name, age, email, address, phoneNumber) { // Long Parameter List
    if (!name || !age || !email || !address || !phoneNumber) {
        return false;
    }
    return true;
}

// Duplicate Code - Same validation logic copied
function validateUserData(user) {
    if (!user.name || !user.age || !user.email || !user.address || !user.phoneNumber) {
        return false;
    }
    return true;
}

// Dead Code - This function is never used
function unusedFunction() {
    console.log("This function is never used.");
}

class Order {
    constructor(orderId, user, product, quantity, price) { // Data Class
        this.orderId = orderId;
        this.user = user;
        this.product = product;
        this.quantity = quantity;
        this.price = price;
    }
}

// Shotgun Surgery - If email logic changes, multiple places must be updated
function sendEmailToUser(user) {
    console.log(`Sending welcome email to ${user.email}`);
}

function notifyUser(user) {
    console.log(`Sending notification email to ${user.email}`);
}

// Shotgun Surgery - This logic is scattered
function updateUserEmail(user, newEmail) {
    user.email = newEmail;
    console.log(`Email updated for user ${user.name} to ${user.email}`);
}

// Dead Code - Unused variable
let unusedVariable = 42;

const user1 = new UserData("John", 25, "john@example.com", "123 Street", "555-1234");
sendEmailToUser(user1);
notifyUser(user1);

const manager = new UserManager();
manager.sendEmail(user1);

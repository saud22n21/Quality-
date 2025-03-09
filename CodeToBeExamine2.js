// A poorly designed "Data Class" with no behavior
class UserData {
    constructor(name, age, email, address, phone, isAdmin, lastLogin, loginCount) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.isAdmin = isAdmin;
        this.lastLogin = lastLogin;
        this.loginCount = loginCount;
    }
}

class Logger {
    log(message) {
        console.log(message);
    }
}

class DebugLogger {
    debug(message) {
        console.log(`DEBUG: ${message}`);
    }
}

class UserReport {
    generateReport(userData) {
        let report = `Report for ${userData.name}:\n`;
        report += `Age: ${userData.age}\n`;
        report += `Email: ${userData.email}\n`;
        report += `Address: ${userData.address}\n`;
        report += `Phone: ${userData.phone}\n`;
        report += `Last Login: ${userData.lastLogin}\n`;
        report += `Login Count: ${userData.loginCount}\n`;
        return report;
    }
}

class Payment {
    constructor(amount, currency, paymentMethod) {
        this.amount = amount;
        this.currency = currency;
        this.paymentMethod = paymentMethod;
    }

    processPayment() {
        console.log(`Processing payment of ${this.amount} ${this.currency} via ${this.paymentMethod}`);
    }
}

class UserManager {
    constructor(userData) {
        this.userData = userData;
    }

    getUserReport() {
        let reportGenerator = new UserReport();
        return reportGenerator.generateReport(this.userData);
    }
}

// A class accessing internal details of another class
class UserAnalytics {
    constructor(userData) {
        this.userData = userData;
    }

    analyze() {
        if (this.userData.loginCount > 10) {
            console.log("User is very active!");
        } else {
            console.log("User is not very active.");
        }
    }
}


function processUserData(name, age, email, address, phone, isAdmin, lastLogin, loginCount, logger) {
    // storing data temporarily
    let tempUser = new UserData(name, age, email, address, phone, isAdmin, lastLogin, loginCount);

    // modifying multiple classes in one function
    let reportGenerator = new UserReport();
    let report = reportGenerator.generateReport(tempUser);

    // logging the same message twice
    logger.log(report);
    logger.log(report);

    if (false) {
        console.log("This will never run.");
    }

    function unusedFunction() {
        console.log("This function is never used.");
    }

    return report;
}

// Example usage
let logger = new Logger();
let userData = processUserData(
    "John Doe", // name
    30, // age
    "john.doe@example.com", // email
    "123 Main St", // address
    "555-1234", // phone
    false, // isAdmin
    "2023-10-01", // lastLogin
    5, // loginCount
    logger // logger
);

console.log(userData);

let payment = new Payment(100, "USD", "Credit Card");
payment.processPayment();

let userManager = new UserManager(userData);
console.log(userManager.getUserReport());

let userAnalytics = new UserAnalytics(userData);
userAnalytics.analyze();
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

// A "Lazy Class" that does almost nothing
class Logger {
    log(message) {
        console.log(message);
    }
}

// A class with "Feature Envy" - it excessively uses another class's data
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

// A function with a "Long Parameter List"
function processUserData(name, age, email, address, phone, isAdmin, lastLogin, loginCount, logger) {
    // "Temporary Field" - storing data temporarily
    let tempUser = new UserData(name, age, email, address, phone, isAdmin, lastLogin, loginCount);

    // "Shotgun Surgery" - modifying multiple classes in one function
    let reportGenerator = new UserReport();
    let report = reportGenerator.generateReport(tempUser);

    // "Duplicate Code" - logging the same message twice
    logger.log(report);
    logger.log(report);

    // "Dead Code" - this block will never execute
    if (false) {
        console.log("This will never run.");
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
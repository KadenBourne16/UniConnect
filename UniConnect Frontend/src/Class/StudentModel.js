export class StudentModel {
    constructor({
        ID,
        ActiveStatus,
        StudentStatus,
        CompletedStatus,
        IndexNumber,
        EntryMode,
        EntryLevel,
        CurrentLevel,
        Programme,
        DateOfAdmission,
        DateOfCompletion,
        Hall,
        Prefix,
        FirstName,
        MiddleName,
        LastName,
        Gender,
        DateOfBirth,
        Nationality,
        Hometown,
        City,
        MobileNo,
        PersonalEmail,
        InstitutionalEmail,
        AddressLine1,
        AddressLine2,
        MaritalStatus,
        Religion,
        Password
    }) {
        this.ID = ID;
        this.ActiveStatus = ActiveStatus;
        this.StudentStatus = StudentStatus;
        this.CompletedStatus = CompletedStatus;
        this.IndexNumber = IndexNumber;
        this.EntryMode = EntryMode;
        this.EntryLevel = EntryLevel;
        this.CurrentLevel = CurrentLevel;
        this.Programme = Programme;
        this.DateOfAdmission = new Date(DateOfAdmission);
        this.DateOfCompletion = DateOfCompletion ? new Date(DateOfCompletion) : null;
        this.Hall = Hall;
        this.Prefix = Prefix;
        this.FirstName = FirstName;
        this.MiddleName = MiddleName;
        this.LastName = LastName;
        this.Gender = Gender;
        this.DateOfBirth = new Date(DateOfBirth);
        this.Nationality = Nationality;
        this.Hometown = Hometown;
        this.City = City;
        this.MobileNo = MobileNo;
        this.PersonalEmail = PersonalEmail;
        this.InstitutionalEmail = InstitutionalEmail;
        this.AddressLine1 = AddressLine1;
        this.AddressLine2 = AddressLine2;
        this.MaritalStatus = MaritalStatus;
        this.Religion = Religion;
        this.Password = Password; // In a real application, you should hash this
    }

    // Getters
    getID() {
        return this.ID;
    }

    getActiveStatus() {
        return this.ActiveStatus;
    }

    getStudentStatus() {
        return this.StudentStatus;
    }

    getCompletedStatus() {
        return this.CompletedStatus;
    }

    getIndexNumber() {
        return this.IndexNumber;
    }

    getEntryMode() {
        return this.EntryMode;
    }

    getEntryLevel() {
        return this.EntryLevel;
    }

    getCurrentLevel() {
        return this.CurrentLevel;
    }

    getProgramme() {
        return this.Programme;
    }

    getDateOfAdmission() {
        return this.DateOfAdmission;
    }

    getDateOfCompletion() {
        return this.DateOfCompletion;
    }

    getHall() {
        return this.Hall;
    }

    getPrefix() {
        return this.Prefix;
    }

    getFirstName() {
        return this.FirstName;
    }

    getMiddleName() {
        return this.MiddleName;
    }

    getLastName() {
        return this.LastName;
    }

    getGender() {
        return this.Gender;
    }

    getDateOfBirth() {
        return this.DateOfBirth;
    }

    getNationality() {
        return this.Nationality;
    }

    getHometown() {
        return this.Hometown;
    }

    getCity() {
        return this.City;
    }

    getMobileNo() {
        return this.MobileNo;
    }

    getPersonalEmail() {
        return this.PersonalEmail;
    }

    getInstitutionalEmail() {
        return this.InstitutionalEmail;
    }

    getAddressLine1() {
        return this.AddressLine1;
    }

    getAddressLine2() {
        return this.AddressLine2;
    }

    getMaritalStatus() {
        return this.MaritalStatus;
    }

    getReligion() {
        return this.Religion;
    }

    // Setters
    setActiveStatus(status) {
        this.ActiveStatus = status;
    }

    setStudentStatus(status) {
        this.StudentStatus = status;
    }

    setCompletedStatus(status) {
        this.CompletedStatus = status;
    }

    setIndexNumber(index) {
        this.IndexNumber = index;
    }

    setEntryMode(mode) {
        this.EntryMode = mode;
    }

    setEntryLevel(level) {
        this.EntryLevel = level;
    }

    setCurrentLevel(level) {
        this.CurrentLevel = level;
    }

    setProgramme(programme) {
        this.Programme = programme;
    }

    setDateOfCompletion(date) {
        this.DateOfCompletion = date ? new Date(date) : null;
    }

    setHall(hall) {
        this.Hall = hall;
    }

    setPrefix(prefix) {
        this.Prefix = prefix;
    }

    setFirstName(firstName) {
        this.FirstName = firstName;
    }

    setMiddleName(middleName) {
        this.MiddleName = middleName;
    }

    setLastName(lastName) {
        this.LastName = lastName;
    }

    setGender(gender) {
        this.Gender = gender;
    }

    setDateOfBirth(dateOfBirth) {
        this.DateOfBirth = new Date(dateOfBirth);
    }

    setNationality(nationality) {
        this.Nationality = nationality;
    }

    setHometown(hometown) {
        this.Hometown = hometown;
    }

    setCity(city) {
        this.City = city;
    }

    setMobileNo(mobileNo) {
        this.MobileNo = mobileNo;
    }

    setPersonalEmail(personalEmail) {
        this.PersonalEmail = personalEmail;
    }

    setInstitutionalEmail(institutionalEmail) {
        this.InstitutionalEmail = institutionalEmail;
    }

    setAddressLine1(addressLine1) {
        this.AddressLine1 = addressLine1;
    }

    setAddressLine2(addressLine2) {
        this.AddressLine2 = addressLine2;
    }

    setMaritalStatus(maritalStatus) {
        this.MaritalStatus = maritalStatus;
    }

    setReligion(religion) {
        this.Religion = religion;
    }

    setPassword(password) {
        this.Password = password; // In a real application, you should hash this
    }
};
const api = 'http://tutorials.codebetter.in:3000'

export default {
    REGISTERAPI:`${api}/auth/doctor/save`,                                               // POST
    LOGINAPI:`${api}/auth/login`,                                                        // POST
    RECEPTIONLOGINAPI:`${api}/auth/login`,                                               // POST
    RECEPTIONAPI:`${api}/api/reception/save`,                                            // POST
    RECEPTIONLISTAPI:`${api}/api/reception/lists`,                                       // GET
    NEWPATIENTAPI:`${api}/api/patient/addpatient`,                                       // POST
    RECEPTIONDETAILUPDATEAPI:`${api}/api/reception/updateReception/`,                    // PUT
    RECEPTIONDELETEAPI:`${api}/api/reception/delete`,                                    // DELETE
    PATIENTLISTFORDOCTORAPI:`${api}/api/patient/list`,                                   // GET
    PATIENTLISTFORRECEPTIONAPI:`${api}/api/patient/lists`,                               // GET
    PATIENTDETAILUPDATE:`${api}/api/patient/update`,                                     // PUT 
    PATIENTAPPOINTMENTUNDO:`${api}/api/patient/undo`,                                    // PUT
    DELETEPATIENT:`${api}/api/patient/delete`,                                           // PUT
    PATIENTAPPOINTMENTDONE:`${api}/api/patient/done`
}
const api = 'http://195.35.20.207:3000'

export default {
    REGISTERAPI:`${api}/auth/doctor/save`,                                               // POST
    LOGINAPI:`${api}/auth/login`,                                                        // POST
    RECEPTIONLOGINAPI:`${api}/auth/login`,                                               // POST
    RECEPTIONAPI:`${api}/api/reception/save`,                                            // POST
    RECEPTIONLISTAPI:`${api}/api/reception/lists`,                                       // GET
    NEWPATIENTAPI:`${api}/api/patient/addpatient`,                                       // POST
    RECEPTIONDETAILUPDATEAPI:`${api}/api/reception/updateReception/:id`,                 // PUT
    RECEPTIONDELETEAPI:`${API}/api/reception/delete/3`,                                  // PUT
    PATIENTLISTFORDOCTORAPI:`${api}/api/patient/list`,                                   // GET
    PATIENTDETAILUPDATE:`${api}/api/patient/update/6`
}
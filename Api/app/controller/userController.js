const con = require("../config/database");
const table = require("../config/tables");
const utils = require("../common/utils");

exports.getAppointment = async (req, res) => {
  
  const user = `SELECT * FROM ${table.appoinment} LEFT JOIN ${table.user} ON appointment.DoctorId = user.id WHERE time = '${req.body.time}'AND date='${req.body.date}' ORDER BY appointment.id desc`;
  con.query(user, (err, userResult) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: `Server internal Error!!!`,
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      status: 200,
      message: "create Account successfully",
      result: userResult,
    });
  });
}

exports.getDoctor = async (req, res) => {
  
  const user = `SELECT * FROM ${table.user} WHERE admin = '2'`;
  con.query(user, (err, userResult) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: `Server internal Error!!!`,
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      status: 200,
      message: "create Account successfully",
      result: userResult,
    });
  });
}
exports.Registration = async (req, res) => {
  const requestData = req.body;
  var image_file = req.files ? req.files : null;

  const user = `SELECT Email FROM ${table.user} WHERE Email = '${requestData.Email}'`;
  con.query(user, (err, userResult) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: `Server internal Error!!!`,
        error: err,
      });
    }
    if (userResult.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Email already registered`,
      });
    }
    let sql = ''
    if (requestData.admin == "2") {
      if (image_file != null && image_file != undefined && image_file.length > 0) {
        var image_name = image_file[0].originalname;
        var url =
          utils.getStoreImageFolderPath(FOLDER_NAME.USER_PROFILES) +
          image_name;
        requestData.image = url;
        utils.storeImageToFolder(
          image_file[0].path,
          image_name,
          FOLDER_NAME.USER_PROFILES,
        );

      } else {
        requestData.image = null
      }

      sql = `INSERT INTO ${table.user} (FirstName,  Email, Password, 
         Gender,  Number,Specialist,licencenumber,status,admin,Image)` +
        ` VALUES ('${requestData.FirstName}',  
        '${requestData.Email}', '${requestData.Password}', 
        '${requestData.Gender}', 
        '${requestData.Number}',
        '${requestData.Specialist}','${requestData.LicenceNumber}',
        '${requestData.status}','${requestData.admin}','${requestData.image}')`;

    } else {
      sql = `INSERT INTO ${table.user} (FirstName,  Email, Password,  Gender, Address, Number)` +
        ` VALUES ('${requestData.FirstName}',  '${requestData.Email}', '${requestData.Password}', '${requestData.Gender}', '${requestData.Address}', '${requestData.Number}')`;

    }
    con.query(sql, (err, results) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: `Server Internal error`,
          error: err,
        });
      }
      return res.status(200).json({
        success: true,
        status: 200,
        message: "create Account successfully",
        result: results,
      });
    });
  });
};


exports.userLogin = async (req, res) => {
  utils.check_request_params(
    req.body,
    [
      { name: "Email", type: "string" },
      { name: "Password", type: "string" },
    ],
    function (response) {
      if (response.success) {
        const postData = req.body;
        const sql = `SELECT * FROM ${table.user} WHERE Email='${postData.Email}'`;
        con.query(sql, async (err, results) => {
          if (err) {
            return res.status(401).send({
              success: false,
              message: `user not valid`,
              error: err,
            });
          }
          if (results.length > 0) {
            const pass = utils.cryptPassword(results[0].Password);
            const checkPass = await utils.comparePassword(
              postData.Password,
              pass,
              results[0]
            );
            // res.setHeader("auth", checkPass);
            return res.status(checkPass ? 200 : 400).send({
              success: checkPass ? true : false,
              status: checkPass ? 200 : 400,
              message: checkPass ? `Logged in succesfully` : "Invalid Password",
              result: checkPass ? results[0] : {},
              token: checkPass,
            });
          } else {
            return res.status(400).send({
              success: false,
              status: 400,
              message: "Invalid Email",
            });
          }
        });
      } else {
        res.json(response);
      }
    }
  );
};
exports.getDoctorFromSpecialist = async (req, res) => {
  const sql = `SELECT * FROM ${table.user} WHERE Specialist="${req.body.Specialist}" AND status="Available"`;
  con.query(sql, (err, results) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: `Server Internal error`,
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      status: 200,
      message: "Doctor details",
      result: results,
    });
  });
}

exports.AddAppointment = async (req, res) => {
const requestData = req.body;
  const sql = `SELECT * FROM ${table.appoinment} WHERE DoctorId="${req.body.DoctorId}" AND time="${req.body.time}" AND date="${req.body.date}"`;
  con.query(sql, (err, results) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: `Server Internal error`,
        error: err,
      });
    }
    if (results.length >= 20) {
      return res.status(200).json({
        success: false,
        message: `Booking Slot Not Available`,
        error: '',
      });
    } else {
      let sql1 = `INSERT INTO ${table.appoinment} (CustomerNumber,description,token,user_id,Name,  Email, date, time, DoctorId)` +
        ` VALUES ('${requestData.CustomerNumber}','${requestData.description}','${results.length + 1}','${requestData.user_id}','${requestData.Name}','${requestData.Email}','${requestData.date}','${requestData.time}','${requestData.DoctorId}')`;
      con.query(sql1, (err, results1) => {

        return res.status(200).json({
          success: true,
          status: 200,
          message: "Add Doctor Appointment",
          result: results1,
        });
      });
    }
  });
}

exports.UpdateAppointmentStatus = async(req,res)=>{
  const sql = `UPDATE ${table.appoinment} SET payment_status="${req.body.payment_status}",razorpay_payment_id="${req.body.razorpay_payment_id}" WHERE id="${req.body.id}"`
  con.query(sql, (err, results) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: `Server Internal error`,
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      status: 200,
      message: "Doctor details",
      result: results,
    });
  });
}

exports.UpdateStatus = async(req,res)=>{
  const sql = `UPDATE ${table.user} SET status="${req.body.status}" WHERE id="${req.body.id}"`
  con.query(sql, (err, results) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: `Server Internal error`,
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      status: 200,
      message: "Doctor details",
      result: results,
    });
  });
}

exports.RecentAppointmentList = async (req,res)=>{
  let sql 
  if(req.body.admin == "0"){
     sql = `SELECT * FROM ${table.appoinment} LEFT JOIN ${table.user} ON appointment.DoctorId = user.id WHERE user_id=${req.body.id} ORDER BY appointment.id desc`
  }else if(req.body.admin == "2"){
    sql = `SELECT * FROM ${table.appoinment} LEFT JOIN ${table.user} ON appointment.DoctorId = user.id WHERE DoctorId=${req.body.id} ORDER BY appointment.id desc`
  }else{
    sql = `SELECT * FROM ${table.appoinment} LEFT JOIN ${table.user} ON appointment.DoctorId = user.id ORDER BY appointment.id desc`
  }
  con.query(sql, (err, results) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: `Server Internal error`,
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      status: 200,
      message: "Doctor details",
      result: results,
    });
  });  
}


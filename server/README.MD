<!--
   .env -> Mongodb api
    bcryptjs   -> Encripted key

    ... Spread Operator
    await UserModel.create({
  ...req.body.credentials,
  password: hashedPassword,
});


await UserModel.create({
  email: req.body.credentials.email,
  fullname: req.body.credentials.fullname,
  phoneNumber: req.body.credentials.phoneNumber,
  password: hashedPassword,
});

-->

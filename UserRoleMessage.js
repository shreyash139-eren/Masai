
let data={
    name:"Alice",
    role:"admin",
    active:false
}
let output=data.role=="admin" && data.active==true ? "Admin Access Granted!":
           data.role=="admin" && data.active==false ? "Admin Access Revoked":
           data.role=="user" && data.active==true ? "User Access Granted!":
           data.role=="user" && data.active==false ? "User Access Revoked!":
                            "Access Denied"
    console.log(output)
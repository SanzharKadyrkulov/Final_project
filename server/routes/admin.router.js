const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroSequelize = require("@admin-bro/sequelize");

AdminBro.registerAdapter(AdminBroSequelize);

const db = require("./../db.js");

const adminBro = new AdminBro({
  databases: [db],
  rootPath: "/admin",
});

const adminRouter = AdminBroExpress.buildRouter(adminBro);

module.exports = { adminRouter, adminBro };

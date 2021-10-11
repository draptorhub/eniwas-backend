/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('checkin', {
		checkinId: {
			type: DataTypes.STRING(20),
			allowNull: false,
			primaryKey: true
		},
		custName: {
			type: DataTypes.STRING(25),
			allowNull: true
		},
		custReferral: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		custMobile: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		custMail: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		custNational: {
			type: DataTypes.STRING(25),
			allowNull: true
		},
		custPurpose: {
			type: DataTypes.STRING(25),
			allowNull: true
		},
		custAddr: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		ciDatetime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		custDays: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		custGuest: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		paymentMode: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		roomType: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		ratePlan: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		roomNumber: {
			type: DataTypes.STRING(55),
			allowNull: true
		},
		branchId: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		roomCharge: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'checkin'
	});
};

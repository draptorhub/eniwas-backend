/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bills', {
		billId: {
			type: DataTypes.STRING(20),
			allowNull: false,
			primaryKey: true
		},
		billDesc: {
			type: DataTypes.STRING(25),
			allowNull: true
		},
		billType: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		payType: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		billAmt: {
			type: "DOUBLE",
			allowNull: true
		},
		checkinId: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		billDatetime: {
			type: 'TIMESTAMP',
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			allowNull: true
		},
	}, {
		tableName: 'bills'
	});
};

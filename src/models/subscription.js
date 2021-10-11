/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('subscription', {
		subsId: {
			type: DataTypes.STRING(20),
			allowNull: false,
			primaryKey: true
		},
		ownerId: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		hotelId: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		branchId: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		subsDuration: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		subsCost: {
			type: "DOUBLE",
			allowNull: true
		},
		paymentDatetime: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'subscription'
	});
};

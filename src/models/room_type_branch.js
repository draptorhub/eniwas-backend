/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('room_type_branch', {
		roomTypeId: {
			type: DataTypes.STRING(10),
			allowNull: false,
			primaryKey: true
		},
		branchId: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		roomTypeCost: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'room_type_branch'
	});
};

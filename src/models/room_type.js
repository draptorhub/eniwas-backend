/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('room_type', {
		roomTypeId: {
			type: DataTypes.STRING(10),
			allowNull: false,
			primaryKey: true
		},
		roomTypeName: {
			type: DataTypes.STRING(15),
			allowNull: true
		}
	}, {
		tableName: 'room_type'
	});
};

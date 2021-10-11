/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rooms', {
		roomId: {
			type: DataTypes.STRING(20),
			allowNull: false,
			primaryKey: true
		},
		roomName: {
			type: DataTypes.STRING(5),
			allowNull: true
		},
		roomType: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		roomStat: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		branchId: {
			type: DataTypes.STRING(15),
			allowNull: true
		}
	}, {
		tableName: 'rooms'
	});
};

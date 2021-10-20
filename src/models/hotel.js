/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('hotel', {
		HotelId: {
			type: DataTypes.STRING(15),
			allowNull: false,
			primaryKey: true
		},
		HotelName: {
			type: DataTypes.STRING(25),
			allowNull: true
		},
		HotelLogo: {
			type: "TEXT",
			allowNull: true
		},
		ownerId: {
			type: DataTypes.STRING(15),
			allowNull: true
		}
	}, {
		tableName: 'hotel'
	});
};

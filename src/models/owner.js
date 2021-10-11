/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('owner', {
		ownerId: {
			type: DataTypes.STRING(20),
			allowNull: false,
			primaryKey: true
		},
		ownerName: {
			type: DataTypes.STRING(25),
			allowNull: true
		},
		ownerMail: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		ownerMobile: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		ownerPassword: {
			type: DataTypes.STRING(12),
			allowNull: true
		}
	}, {
		tableName: 'owner'
	});
};

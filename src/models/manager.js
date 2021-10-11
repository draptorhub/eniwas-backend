/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('manager', {
		mngrId: {
			type: DataTypes.STRING(10),
			allowNull: false,
			primaryKey: true
		},
		mngrName: {
			type: DataTypes.STRING(25),
			allowNull: true
		},
		mngrMail: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		mngrPass: {
			type: DataTypes.STRING(12),
			allowNull: true
		},
		mngeEnabled: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'manager'
	});
};

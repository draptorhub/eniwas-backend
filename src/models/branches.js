/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('branches', {
		branchId: {
			type: DataTypes.STRING(15),
			allowNull: false,
			primaryKey: true
		},
		branchName: {
			type: DataTypes.STRING(25),
			allowNull: true
		},
		branchLoc: {
			type: DataTypes.STRING(25),
			allowNull: true
		},
		branchAdd: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		branchContact: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		managerId: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		hotelId: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		branchEnabled: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'branches'
	});
};

DROP PROCEDURE IF EXISTS `getAccesosDenegados`;
CREATE PROCEDURE `getAccesosDenegados`()
BEGIN
	SELECT u.id FROM Uso u JOIN Equipo e ON u.EQUIPO_NUMSERIE = e.NUMSERIE WHERE u.estado = 1;
END;

DROP PROCEDURE IF EXISTS `getAccesosDenegadosByDates`;
CREATE PROCEDURE `getAccesosDenegadosByDates`(IN `desde` date, IN `hasta` date)
BEGIN
	SELECT u.id FROM Uso u JOIN Equipo e ON u.EQUIPO_NUMSERIE = e.NUMSERIE WHERE u.estado = 1 AND u.fechaUso >= desde AND u.fechaUso <= hasta;
END;;

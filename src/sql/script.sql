CREATE database ficohsa;

USE ficohsa;

CREATE TABLE `ficohsa`.`dna` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `dna` VARCHAR(100) NOT NULL,
    `mutant` TINYINT NOT NULL,
    PRIMARY KEY (`id`, `dna`)
);
CREATE TABLE `t3_todo` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`progress` enum('backlog','in-progress','done') NOT NULL,
	`task` longtext,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`userId` varchar(255),
	`updatedAt` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `t3_todo_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
DROP TABLE `example-app_post`;
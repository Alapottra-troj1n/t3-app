// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  bigint,
  longtext,
  mysqlEnum,
  mysqlTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = mysqlTableCreator((name) => `t3_${name}`);

export const todos = createTable(
  "todo",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    progress: mysqlEnum("progress", ["backlog", "in-progress", "done"]).notNull(),
    task: longtext('task'),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    userId: varchar('userId',{length: 255}),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
  },
);

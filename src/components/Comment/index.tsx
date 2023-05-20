import { Stack } from "@mui/material";
import avatar2 from "../../assets/avatar2.png";
import trash from "../../assets/trash.png";
import styles from "./styles.module.scss";

export const Comment = () => {
  return (
    <>
      <div className={styles["comment-card"]}>
        <Stack alignItems={"center"} direction="row" spacing={2}>
          <img
            className={styles.avatar}
            width={35}
            src={avatar2}
            alt="avatar"
          />
          <p>
            Boris estou no local já lhe esperando. estou com camisa azul e calça
            jeans
          </p>
          <img
            className={styles["card-btn"]}
            width={22}
            height={22}
            src={trash}
            alt="deletar"
          />
        </Stack>
      </div>
    </>
  );
};

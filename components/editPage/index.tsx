import { Button } from "@material-ui/core";
import { Add, Edit, Translate } from "@material-ui/icons";
import { Algorithm } from "lib/models";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useTranslation from "hooks/translation";
import AddExplanation from "./addExplanation";
import AddImplementation from "./addImplementation";
import AddTranslation from "./addTranslation";
import classes from "./style.module.css";

export default function EditPage({ algorithm }: { algorithm: Algorithm }) {
  const router = useRouter();
  const [addImplementationOpen, setAddImplementationOpen] = useState(false);
  const [addTranslationOpen, setAddTranslationOpen] = useState(false);
  const [addExplanationOpen, setAddExplanationOpen] = useState(false);
  const t = useTranslation();

  return (
    <div className={classes.container}>
      {algorithm.explanationUrl.en ? (
        <>
          {!algorithm.explanationUrl[router.locale] && (
            <>
              <Button
                startIcon={<Translate />}
                className={classes.button}
                onClick={() => setAddTranslationOpen(true)}
              >
                {t("editPageTranslate")}
              </Button>
              <AddTranslation
                algorithm={algorithm}
                open={addTranslationOpen}
                onClose={() => setAddTranslationOpen(false)}
              />
            </>
          )}
          <a
            href={(
              algorithm.explanationUrl[router.locale] ||
              algorithm.explanationUrl.en
            )
              .replace("/blob/", "/edit/")
              .replace("/tree/", "/edit/")}
          >
            
          </a>
        </>
      ) : (
        <>
      
        </>
      )}
     
      <AddImplementation
        algorithm={algorithm}
        open={addImplementationOpen}
        onClose={() => setAddImplementationOpen(false)}
      />
    </div>
  );
}

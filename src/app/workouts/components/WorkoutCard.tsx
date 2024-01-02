"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DotsThreeOutlineVertical } from "@phosphor-icons/react";

export function WorkoutCard(props: {
  label: string;
  lastExecutionDate: string;
  workoutUrl: string;
}) {
  const { label, workoutUrl } = props;

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold py-4 text-primary">
            Terça
          </CardTitle>
          <Button variant="ghost" className="p-0">
            <Icons.Menu />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <div className="flex flex-col">
            <span className="text-sm">Costas e Peito</span>
            <div className="flex gap-[4px] items-center">
              <span className="text-lg">Ultima Execução:</span>
              <span className="">12/12</span>
            </div>
          </div>
        </CardDescription>
        <Button
          style={{ borderRadius: "12px" }}
          variant="outline"
          className="w-full"
        >
          Ver Treino
        </Button>
      </CardContent>
    </Card>
  );
}

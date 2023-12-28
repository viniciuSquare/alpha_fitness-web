'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold py-4 text-primary">
            Terça
          </CardTitle>
          <Button variant="ghost" className="p-0">
            <DotsThreeOutlineVertical
              size={32}
              weight="duotone"
              className="text-primary"
            />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <span className="text-sm">Costas e Peito</span>
          <div className="flex gap-[4px] items-center">
            <span className="text-lg">Ultima Execução:</span>
            <span className="">12/12</span>
          </div>
        </div>
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

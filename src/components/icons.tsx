'use client'

import { DotsThreeOutlineVertical } from "@phosphor-icons/react";
import { ChevronDown, Play } from "lucide-react";

export function Icons() {}

Icons.Play = () => <Play 
  className="text-primary" 
  size={32}
/>;

Icons.ChevronDown = () => <ChevronDown 
  size={32} 
  className="text-primary" 
/>;

Icons.Menu = () => <DotsThreeOutlineVertical
  size={32}
  weight="fill"
  className="text-primary"
/>

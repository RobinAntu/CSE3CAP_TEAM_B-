import React, { useState } from "react";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Switch from "../components/ui/Switch";
import { Accordion, AccordionItem } from "../components/ui/Accordion";

export default function Settings() {
  const [email] = useState("john.doe@example.com");
  const [pwd, setPwd] = useState({ current: "", next: "", confirm: "" });
  const [notify, setNotify] = useState(true);

  return (
    <div className="space-y-8 pb-24">
      <h1 className="text-4xl font-semibold">Settings</h1>
      <Card className="p-6">
        <Accordion>
          <AccordionItem title="Account Settings" defaultOpen>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <label className="block text-sm font-medium">Email Address</label>
                  <Input value={email} readOnly />
                </div>
                <Button variant="ghost" className="ml-4">Edit</Button>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Change Password</label>
                <Input
                  type="password"
                  placeholder="Current Password"
                  value={pwd.current}
                  onChange={(e) => setPwd({ ...pwd, current: e.target.value })}
                />
                <Input
                  type="password"
                  placeholder="New Password"
                  value={pwd.next}
                  onChange={(e) => setPwd({ ...pwd, next: e.target.value })}
                />
                <Input
                  type="password"
                  placeholder="Confirm New Password"
                  value={pwd.confirm}
                  onChange={(e) => setPwd({ ...pwd, confirm: e.target.value })}
                />
                <div className="flex items-center justify-between pt-2">
                  <span>Receive email notifications</span>
                  <Switch checked={notify} onChange={setNotify} />
                </div>
                <Button variant="secondary" className="w-full mt-2">Update Password</Button>
              </div>
            </div>
          </AccordionItem>
          <AccordionItem title="Sync Preferences">
            <div className="space-y-2">
              <label className="flex items-center space-x-2"><input type="checkbox" className="h-4 w-4"/> <span>Google</span></label>
              <label className="flex items-center space-x-2"><input type="checkbox" className="h-4 w-4"/> <span>iCal</span></label>
            </div>
          </AccordionItem>
          <AccordionItem title="Privacy & Data">
            <div className="space-y-2">
              <label className="flex items-center justify-between"><span>Discoverable profile</span><Switch checked={false} onChange={() => {}}/></label>
              <label className="flex items-center justify-between"><span>Show online status</span><Switch checked={true} onChange={() => {}}/></label>
              <Button variant="ghost">Download my data</Button>
            </div>
          </AccordionItem>
        </Accordion>
      </Card>
      <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-gray-50 p-4 text-right">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}

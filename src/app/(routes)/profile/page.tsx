// app/(routes)/profile/page.tsx
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, Mail, School, Calendar, BookOpen, Award, 
  Settings, Shield, Bell 
} from "lucide-react";

// Mock user data - replace with your auth data
const mockUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  studentId: '2023001',
  joinDate: 'September 2023',
  role: 'Member',
  avatar: '/api/placeholder/32/32',
  achievements: [
    'Hackathon Winner 2023',
    'Best Project Award',
    'Active Contributor'
  ],
  eventParticipation: [
    'Tech Workshop 2024',
    'Coding Competition',
    'Innovation Summit'
  ]
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F0AB00]/5">
      <div className="container mx-auto px-4 py-12">
        {/* Profile Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-lg p-6 shadow-sm">
            <Avatar className="h-24 w-24 ring-4 ring-[#F0AB00]/20">
              <AvatarImage src={mockUser.avatar} />
              <AvatarFallback className="bg-[#0C2340] text-2xl text-white">
                {mockUser.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-[#0C2340] mb-2">{mockUser.name}</h1>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-[#707070]">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {mockUser.email}
                </div>
                <div className="flex items-center gap-2">
                  <School className="w-4 h-4" />
                  ID: {mockUser.studentId}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Joined {mockUser.joinDate}
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline"
                className="border-[#0C2340] text-[#0C2340] hover:bg-[#0C2340] hover:text-white"
              >
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button className="bg-[#F0AB00] text-white hover:bg-[#F0AB00]/90">
                <Shield className="w-4 h-4 mr-2" />
                Manage Account
              </Button>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0C2340] flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#F0AB00]" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {mockUser.achievements.map((achievement, index) => (
                      <li 
                        key={index}
                        className="flex items-center gap-3 text-[#707070]"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#F0AB00]" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0C2340] flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#F0AB00]" />
                    Event Participation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {mockUser.eventParticipation.map((event, index) => (
                      <li 
                        key={index}
                        className="flex items-center gap-3 text-[#707070]"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#F0AB00]" />
                        {event}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Add other tab contents as needed */}
        </Tabs>
      </div>
    </div>
  );
}
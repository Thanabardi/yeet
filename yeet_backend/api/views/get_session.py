from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import *

from api.models import Session, Machine
from api.serializers import SessionSerializer
from api.constants import *


class GetSession(APIView):
    """Get session in the view of frontend or hardware"""
    def get(self, request, machine_code, view_as, session_id=None):
        if view_as is not None and machine_code is not None:
            # for front-end
            if view_as == FRONTEND_VIEW:
                session_id = request.data["session_id"]
                if session_id is None:
                    return Response({"msg": "please specify session id"})
                try:
                    session = Session.objects.get(
                        id = int(session_id),
                        machine = Machine.objects.get(machine_code=machine_code)
                    )
                    return Response({"session": SessionSerializer(session).data})
                except (Session.DoesNotExist, Machine.DoesNotExist):
                    return Response({"msg": f"session: {session_id} at machine_code: {machine_code} not found"}, HTTP_404_NOT_FOUND)
            # for hardware
            elif view_as == HARDWARE_VIEW:
                try:
                    session = Session.objects.filter(machine__machine_code=machine_code).latest()
                    return Response({"session": SessionSerializer(session).data})
                except (Session.DoesNotExist, Machine.DoesNotExist):
                    return Response({"msg": f"session: {session_id} at machine_code: {machine_code} not found"}, HTTP_404_NOT_FOUND)
            else:
                return Response({"msg": "invalid type of view"}, HTTP_400_BAD_REQUEST)
        
        return Response({"msg": "please specify type of view and machine code"}, HTTP_400_BAD_REQUEST)
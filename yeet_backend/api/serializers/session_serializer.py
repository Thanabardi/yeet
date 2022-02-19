from rest_framework import serializers
from api.models import Session


class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = (
            "id",
            "logged_in",
            "done",
            "machine_code",
            "start",
            "end",
            "score",
            "user"
        )